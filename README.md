# calculateTotalTarget
# Project Title: Calculate Total Target

## Description

This project provides a function called `calculateTotalTarget` that calculates monthly targets based on a given date range and an annual target. It also excludes Fridays from the working days calculation, thus allowing for a more precise distribution of the annual target across the specified time period. This function is useful for businesses to calculate realistic monthly targets based on specific working days, excluding weekends or particular holidays.

## Instructions on How to Run the Code

To run this code:

1. Install Node.js if it isn't installed on your machine.
2. Copy the function code and save it as a JavaScript file, for example, `calculateTotalTarget.js`.
3. Run the file using Node.js in your terminal.

```sh
node calculateTotalTarget.js
```

Make sure the file contains the function `calculateTotalTarget` and the example usage code at the end.

## Explanation of the Function

The function `calculateTotalTarget` is designed to calculate monthly targets based on specific parameters.

### Parameters:
1. **startDate** (String): The start date in `YYYY-MM-DD` format.
2. **endDate** (String): The end date in `YYYY-MM-DD` format.
3. **totalAnnualTarget** (Number): The total annual target (must be a positive number).

### Function Steps:
1. Validates that the date formats are correct.
2. Validates that the start date is before or equal to the end date.
3. Validates that the `totalAnnualTarget` is a positive number.
4. Iterates through the date range, calculates the number of days worked in each month excluding Fridays.
5. Calculates the monthly targets based on the number of working days (excluding Fridays).
6. Returns an object containing:
   - `daysExcludingFridays`: Days excluding Fridays for each month.
   - `daysWorkedExcludingFridays`: Days worked excluding Fridays for each month.
   - `monthlyTargets`: Calculated target for each month.
   - `totalTarget`: Sum of monthly targets.

### Example:
```javascript
try {
    console.log(calculateTotalTarget('2024-01-01', '2024-01-31', 5220));
} catch (error) {
    console.error(error.message);
}
```
This example will output the calculated monthly targets for January 2024.

## Example of Usage

Suppose you want to calculate monthly targets for a given date range excluding Fridays. You can call the function as shown below:

```javascript
const result = calculateTotalTarget('2024-01-01', '2024-03-31', 12000);
console.log(result);
```
### Expected Output:
The output will be an object that contains:
- Days excluding Fridays in each month.
- Days worked excluding Fridays.
- Monthly targets based on those working days.
- The total target across the given months.

## Assumptions or Limitations

- The dates must be provided in `YYYY-MM-DD` format, and the function will throw an error if this format is not followed.
- The start date must be before or equal to the end date.
- Only Fridays are excluded as non-working days. If other holidays need to be excluded, additional logic will be required.
- The `totalAnnualTarget` should be a positive number, and if not, an error will be thrown.

