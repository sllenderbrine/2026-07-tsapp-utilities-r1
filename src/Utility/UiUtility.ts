export function maintainAspectFitContain(
    containerWidth: number,
    containerHeight: number,
    aspectRatio: number,
): [number, number] {
    const cAspect = containerWidth / containerHeight;
    if(aspectRatio > cAspect) {
        return [
            containerWidth,
            containerWidth / aspectRatio,
        ];
    } else {
        return [
            containerHeight * aspectRatio,
            containerHeight,
        ];
    }
}

export function maintainAspectFitCover(
    containerWidth: number,
    containerHeight: number,
    aspectRatio: number,
) {
    const cAspect = containerWidth / containerHeight;
    if(aspectRatio > cAspect) {
        return [
            containerHeight * aspectRatio,
            containerHeight,
        ];
    } else {
        return [
            containerWidth,
            containerWidth / aspectRatio,
        ];
    }
}