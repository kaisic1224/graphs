import Link from "next/link";

const account = () => {
  return (
    <div>
      <Link href='/api/auth/login'>
        <a>asdasd</a>
      </Link>
      <Link href='/api/auth/logout'>
        <a>logout</a>
      </Link>
    </div>
  );
};
export default account;
