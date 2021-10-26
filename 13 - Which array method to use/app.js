// #What do i actually want from this method?
// +To mutate origianl array+
    // - Add to original:
        .push // (end)
        .unshift // (start)

    // - Remove from orignal:
        .pop // (end)
        .shift // (start)
        .splice // (any)

    // - others:
        .reverse
        .sort
        .fill
// +A new array+
    // - Computed from original(calculate one array from original):
        .map // (loop)
    
    // - Filtered using condition:
        .filter
    
    // - Portion of original:
        .slice

    // - Adding original to other:
        .concat

    // - Flatterig the orignal:
        .flat
        .flatMap


// +An array index+
    // - Based on value:
        .indexOf
    
    // - Based on text condition:
        .findIndex

// +An array element+
    // - Based on test condition:
        .find

// +know if array includes+
    // - Based on value:
        .includes
    
    // - Based on test condition:
        .some // returns if at least one of the elements pass the condition.
        .every // only return if all of the elements pass the condition.

// +a new string+
    // - Based on seperator string:
        .join

// +to transform to value+
    // - Based on accumulator:
        .reduce // Boil down array to single value of any type: number,string, boolean, or even new array or object.

// +to just loop array+
    // - Based on callback
        .forEach // Does not create a new array, just loops over it
