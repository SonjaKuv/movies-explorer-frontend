export const calculateDuration = (duration) => {
    let hours = Math.floor(duration / 60);
    let mins = Math.floor(duration - hours * 60);
    return (hours && hours + 'ч') + mins + 'м';
}