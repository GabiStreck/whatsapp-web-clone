import { MenuItem } from "@material-ui/core";
import MenuSetting from "./MenuSetting";
import { auth } from "../../firebase";

export default function MenuSettingProfile() {
    return (
        <MenuSetting>
            <MenuItem onClick={() => auth?.signOut()}>Logout</MenuItem>
        </MenuSetting>
    );
}
