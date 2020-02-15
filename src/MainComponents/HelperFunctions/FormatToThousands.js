export default function FormatToThousands(value) {
  return "$" + value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}
