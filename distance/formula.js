export function howLong(p1, p2) {
    return Math.sqrt(Math.pow((p1[0]-p2[0]), 2) + Math.pow((p1[1]-p2[1]), 2), 2)
}

export function sortLength(...lines) {
    return lines.sort((a, b) => a - b);
}