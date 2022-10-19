import { Menu } from "antd";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Menu>
        <Menu.Item>Item</Menu.Item>
      </Menu>
      <Link href="/">Index</Link>
    </div>
  );
}
