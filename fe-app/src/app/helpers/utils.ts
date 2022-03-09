export function transformTurn(value: 'morning' | 'afternoon' | 'night'): string {
  const HourTurn = {
    morning: 'Mañana',
    afternoon: 'Tarde',
    night: 'Noche',
  };

  return HourTurn[value];
}
