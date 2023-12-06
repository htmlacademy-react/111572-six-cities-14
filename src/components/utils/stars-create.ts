export default function starsCreate(rating: number): string {
  return `${(Math.round(rating) * 20).toString()}%`;
}
