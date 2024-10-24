export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("andrew id")) {
    //TODO add your Andrew ID below
    //TODO update the corresponding test case in __tests__
    return ( "dcharkvi" );
  }
  if (query.toLowerCase().includes("name")) {
    //TODO add your Andrew ID below
    //TODO update the corresponding test case in __tests__
    return ( "Davit" );
  }

  if (query.toLowerCase().includes("which of the following numbers is the largest")) {
    // Extract numbers from the query using a regular expression
    const numbers = query.match(/\d+/g);
  
    if (numbers) {
      // Convert extracted numbers to integers
      const numericValues = numbers.map(Number);
      
      // Find the largest number
      const largestNumber = Math.max(...numericValues);
      
      // Return the largest number as a string
      return largestNumber.toString();
    }
  
    // Handle the case where no numbers are found
    return "No numbers found in the query.";
  }
  
  
  return "";
}
