//### components / layouts / Header.tsx

import Link from "next/link";
import Button from "../common/Button";

const Header: React.FC = () => {
	return (
		<header className="fixed w-full bg-white shadow-md">
			<div className="container mx-auto flex justify-between items-center py-6 px-4 md:px-8">
				<Link href="/" className="text md:text-5xl font-bold text-gray-800 tracking-tight">
					Splash App Home
				</Link>
				<Link href="/counter-app" className="md:text-5xl font-bold text-gray-800 tracking-tight">
					Counter App
				</Link>

				{/*Button Group */}
				<div className="flex gap-4">
					<Button buttonLabel="Sign In" buttonBackgroundColor="red" />
					<Button
						buttonLabel="Sign Up"
						buttonBackgroundColor="blue"
					/>
				</div>
			</div>
		</header>
	)
};

export default Header;
