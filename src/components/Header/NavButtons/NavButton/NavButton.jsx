export function NavButton({id, src, count}) {
  console.log(src);
  return (
    <input key={id} type="image" src={src} value={count} alt="count" />
  );
}