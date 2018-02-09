/**
 * Precision to retain in factoredInteger()
 */
let FACTOR = 5;

/**
 * Set a new value for the rounding factor
 * 
 * @param Integer newFactor 
 */
export const setRoundingFactor = ( newFactor ) => {
    FACTOR = newFactor;
}

/**
 * Factor a number by FACTOR and round to the nearest whole number
 */
export const factoredInteger = ( value ) => (
    Math.round( value * ( 10 ** FACTOR ) )
);
