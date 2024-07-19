interface Coordinate {
    x: number;
    y: number;
    }
    function parseCoordinate(obj: Coordinate): Coordinate {
        return {
            ...obj,
        };
    }
    function parseCoordinate2(obj: Coordinate): Coordinate {