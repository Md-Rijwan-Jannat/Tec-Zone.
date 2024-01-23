import { QuestionMarkCircleIcon } from "@heroicons/react/20/solid";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { CiSettings } from "react-icons/ci";
import {
  FaEdit,
  FaQuestion,
  FaRegUser,
  FaSignOutAlt,
  FaUser,
} from "react-icons/fa";
import { FiSettings } from "react-icons/fi";

export function UserModal() {
  return (
    <Menu>
      <MenuHandler>
        <div className="flex flex-col items-center gap-1 hover:text-[#F5A]">
          <IconButton placeholder={""}>
            <FaRegUser className="text-25px md:text-[30px] text-[#F5A]"></FaRegUser>
          </IconButton>
          <p className="text-[5px] md:text-[8px] lg:text-[10px] hidden md:block">
            Register / Login
          </p>
        </div>
      </MenuHandler>
      <MenuList className="mr-2" placeholder={""}>
        <MenuItem placeholder={""} className="flex items-center gap-2">
          <FaUser />
          <Typography placeholder={""} variant="small" className="font-medium">
            My Profile
          </Typography>
        </MenuItem>
        <MenuItem placeholder={""} className="flex items-center gap-2">
          <FaEdit />
          <Typography placeholder={""} variant="small" className="font-medium">
            Edit Profile
          </Typography>
        </MenuItem>
        <MenuItem placeholder={""} className="flex items-center gap-2">
          <FaQuestion />
          <Typography placeholder={""} variant="small" className="font-medium">
            Help
          </Typography>
        </MenuItem>
        <MenuItem placeholder={""} className="flex items-center gap-2">
          <FiSettings />
          <Typography placeholder={""} variant="small" className="font-medium">
            Settings
          </Typography>
        </MenuItem>
        <hr className="my-2 border-blue-gray-50" />
        <MenuItem placeholder={""} className="flex items-center gap-2 ">
          <FaSignOutAlt />
          <Typography placeholder={""} variant="small" className="font-medium">
            Sign Out
          </Typography>
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
