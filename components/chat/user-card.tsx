import { IUserDocument } from "@/models/userModel";
import { Avatar, AvatarImage } from "../ui/avatar";

type UserCardProps = {
	user: IUserDocument;
	selectedUser: IUserDocument | null;
	handleSelectedUser: (user: IUserDocument) => void;
};

const UserCard = ({
	user,
	selectedUser,
	handleSelectedUser,
}: UserCardProps) => {
	const isSelected = user._id === selectedUser?._id;
	const bg = isSelected ? "bg-sigBackgroundFeedHover" : "";
	return (
		<div
			onClick={() => handleSelectedUser(user)}
			className={`flex items-center gap-2 border-b ${bg} border-b-sigColorBgBorder p-1 hover:bg-sigBackgroundFeedHover cursor-pointer `}
		>
			<Avatar className="cursor-pointer hover:bg-sigBackgroundSecondaryHover">
				<AvatarImage src={user.avatar} />
			</Avatar>
			<span>{user.fullName}</span>
		</div>
	);
};
export default UserCard;
