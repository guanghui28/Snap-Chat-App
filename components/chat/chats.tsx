import { auth } from "@/auth";
import { getUsersForSideBar } from "@/lib/data";
import Chat from "./chat";

const Chats = async () => {
	const session = await auth();
	const chats = session?.user ? await getUsersForSideBar(session.user._id) : [];
	console.log({ chats });
	return (
		<nav className="flex-1 overflow-y-auto">
			<ul>
				{chats.map((chat) => (
					<Chat key={chat._id} chat={chat} />
				))}
			</ul>
		</nav>
	);
};

export default Chats;
