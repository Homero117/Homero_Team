// After 
updateRecords(recordCollection, 5439, "artist", "ABBA")
// artist should be the string ABBA

// After 
updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me")
// , tracks should have the string Take a Chance on Me as the last and only element.

// After 
updateRecords(recordCollection, 2548, "artist", "")
// , artist should not be set

// After 
updateRecords(recordCollection, 1245, "tracks", "Addicted to Love")
// , tracks should have the string Addicted to Love as the last element.

// After 
updateRecords(recordCollection, 2468, "tracks", "Free")
// , tracks should have the string 1999 as the first element.

// After 
updateRecords(recordCollection, 2548, "tracks", "")
// , tracks should not be set

// After 
updateRecords(recordCollection, 1245, "albumTitle", "Riptide")
// , albumTitle should be the string Riptide