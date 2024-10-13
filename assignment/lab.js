function calculateTotalTarget(startDate, endDate, totalAnnualTarget) {
    // Validate date format (using regex for YYYY-MM-DD)
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(startDate) || !dateRegex.test(endDate)) {
        throw new Error("Dates must be in YYYY-MM-DD format.");
    }

    const start = new Date(startDate);
    const end = new Date(endDate);

    // Validate if date objects are valid and if the start date is before or equal to the end date
    if (isNaN(start) || isNaN(end) || start > end) {
        throw new Error("Invalid date range provided. Ensure start date is before or equal to end date.");
    }

    // Validate totalAnnualTarget to be a positive number
    if (typeof totalAnnualTarget !== 'number' || totalAnnualTarget <= 0) {
        throw new Error("Total annual target must be a positive number.");
    }

    const monthlyData = {};
    const current = new Date(start);

    while (current <= end) {
        const year = current.getFullYear();
        const month = current.getMonth();
        const key = `${year}-${month}`;

        if (!monthlyData[key]) {
            monthlyData[key] = { daysExcludingFridays: 0, daysWorkedExcludingFridays: 0 };
        }

        if (current.getDay() !== 5) { // Exclude Fridays (getDay() returns 5 for Friday)
            monthlyData[key].daysExcludingFridays++;
            if (current >= start && current <= end) {
                monthlyData[key].daysWorkedExcludingFridays++;
            }
        }

        current.setDate(current.getDate() + 1);
    }

    const monthlyTargets = [];
    for (const key in monthlyData) {
        const monthlyTargetBase = totalAnnualTarget / 12;
        const workingDays = monthlyData[key].daysWorkedExcludingFridays;
        const daysExcludingFridays = monthlyData[key].daysExcludingFridays;
        const monthlyTarget = daysExcludingFridays > 0 ? (monthlyTargetBase / daysExcludingFridays) * workingDays : 0;
        monthlyTargets.push(monthlyTarget);
    }

    return {
        daysExcludingFridays: Object.values(monthlyData).map(m => m.daysExcludingFridays),
        daysWorkedExcludingFridays: Object.values(monthlyData).map(m => m.daysWorkedExcludingFridays),
        monthlyTargets: monthlyTargets,
        totalTarget: monthlyTargets.reduce((acc, val) => acc + val, 0)
    };
}

// Example usage
try {
    console.log(calculateTotalTarget('2024-01-01', '2023-01-31', 5220));
} catch (error) {
    console.error(error.message);
}

