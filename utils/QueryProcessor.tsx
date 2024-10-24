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
  
  if (query.toLowerCase().includes("what is") && query.toLowerCase().includes("plus")) {
    // Extract numbers from the query using a regular expression
    const numbers = query.match(/\d+/g);
    
    if (numbers) {
      // Convert extracted numbers to integers
      const numericValues = numbers.map(Number);
  
      // Perform the addition operation
      const sum = numericValues.reduce((a, b) => a + b, 0);
      
      // Return the result as a string
      return sum.toString();
    }
  
    // Handle the case where no numbers are found
    return "No numbers found in the query.";
  }  

  if (query.toLowerCase().includes("which of the following numbers is both a square and a cube")) {
    // Extract numbers from the query using a regular expression
    const numbers = query.match(/\d+/g);
    
    if (numbers) {
      // Convert extracted numbers to integers
      const numericValues = numbers.map(Number);
  
      // Function to check if a number is a perfect sixth power
      const isPerfectSixthPower = (num: number): boolean => {
        const root = Math.round(Math.pow(num, 1 / 6));
        return Math.pow(root, 6) === num;
      };
  
      // Filter numbers that are both a square and a cube (i.e., perfect sixth powers)
      const result = numericValues.filter(isPerfectSixthPower);
  
      // Return the result as a string (or a comma-separated string if multiple numbers)
      return result.length > 0 ? result.join(", ") : "No numbers are both a square and a cube.";
    }
  
    // Handle the case where no numbers are found
    return "No numbers found in the query.";
  }  

  if (query.toLowerCase().includes("what is") && query.toLowerCase().includes("multiplied by")) {
    // Extract numbers from the query using a regular expression
    const numbers = query.match(/\d+/g);
  
    if (numbers) {
      // Convert extracted numbers to integers
      const numericValues = numbers.map(Number);
  
      // Perform the multiplication operation
      const product = numericValues.reduce((a, b) => a * b);
      
      // Return the result as a string
      return product.toString();
    }
  
    // Handle the case where no numbers are found
    return "No numbers found in the query.";
  }
  
  if (query.toLowerCase().includes("what is") && query.toLowerCase().includes("minus")) {
    // Extract numbers from the query using a regular expression
    const numbers = query.match(/\d+/g);
  
    if (numbers) {
      // Convert extracted numbers to integers
      const numericValues = numbers.map(Number);
  
      // Perform the subtraction operation (subtract second number from the first)
      const difference = numericValues.reduce((a, b) => a - b);
      
      // Return the result as a string
      return difference.toString();
    }
  
    // Handle the case where no numbers are found
    return "No numbers found in the query.";
  }

  if (query.toLowerCase().includes("which of the following numbers are primes")) {
    // Extract numbers from the query using a regular expression
    const numbers = query.match(/\d+/g);
  
    if (numbers) {
      // Convert extracted numbers to integers
      const numericValues = numbers.map(Number);
  
      // Function to check if a number is prime
      const isPrime = (num: number): boolean => {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
          if (num % i === 0) return false;
        }
        return true;
      };
  
      // Filter numbers that are prime
      const primeNumbers = numericValues.filter(isPrime);
  
      // Return the prime numbers as a string (or a comma-separated string if multiple primes)
      return primeNumbers.length > 0 ? primeNumbers.join(", ") : "No prime numbers found.";
    }
  
    // Handle the case where no numbers are found
    return "No numbers found in the query.";
  }
  
  if (query.toLowerCase().includes("which of the following numbers are not primes")) {
    // Extract numbers from the query using a regular expression
    const numbers = query.match(/\d+/g);
  
    if (numbers) {
      // Convert extracted numbers to integers
      const numericValues = numbers.map(Number);
  
      // Function to check if a number is prime
      const isPrime = (num: number): boolean => {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
          if (num % i === 0) return false;
        }
        return true;
      };
  
      // Filter numbers that are not prime
      const nonPrimeNumbers = numericValues.filter(num => !isPrime(num));
  
      // Return the non-prime numbers as a string (or a comma-separated string if multiple)
      return nonPrimeNumbers.length > 0 ? nonPrimeNumbers.join(", ") : "All numbers are prime.";
    }
  
    // Handle the case where no numbers are found
    return "No numbers found in the query.";
  }  

  if (query.toLowerCase().includes("what is") && query.toLowerCase().includes("to the power of")) {
    // Extract numbers from the query using a regular expression
    const numbers = query.match(/\d+/g);
  
    if (numbers && numbers.length === 2) {
      // Convert extracted numbers to BigInt
      const base = BigInt(numbers[0]);
      const exponent = BigInt(numbers[1]);
  
      // Manually perform the power operation (since ** might not be available in older targets)
      let result = BigInt(1);
      for (let i = BigInt(0); i < exponent; i++) {
        result *= base;
      }
  
      // Return the result as a string
      return result.toString();
    }
  
    // Handle the case where no numbers are found or invalid number of numbers
    return "Invalid query format or numbers.";
  }  
  
  return "";
}
