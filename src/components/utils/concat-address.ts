export default function concatAddress(address: string) {
  if (address.length < 8) {
    // Handle addresses that are too short
    return address;
  }

  const firstFour = address.substring(0, 4);
  const lastFour = address.substring(address.length - 4);

  return `${firstFour}...${lastFour}`;
}
