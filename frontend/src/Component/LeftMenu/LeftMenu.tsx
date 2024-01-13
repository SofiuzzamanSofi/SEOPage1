import { FC } from 'react';
import menuClosed from "../../assets/menu-closed.svg"
import bell from "../../assets/bell.svg"
import downArrow from "../../assets/down-arrow-svgrepo-com.svg"
import calender from "../../assets/calendar4.svg"
import searchIcon from "../../assets/search.svg"
import plushIcon from "../../assets/plus-circle-fill.svg"
import profileImage from "../../assets/sofi.jpeg"
import style from "./LeftMenu.module.css"


interface LeftMenuProps {
    setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const LeftMenu: FC<LeftMenuProps> = ({ setMobileMenuOpen }) => {

    const profileName = "Sofi";

    return (
        <div className={style.left_menu_div}>

            {/* // first line pic and closed  */}
            <div className={style.left_menu_div_pic}>
                <div>
                    <button className={style.left_menu_image_with_dropdown}>
                        <img className={style.left_menu_profile_image} src={profileImage} alt="" />

                        <div className={style.profile_name_drow_arrow}>
                            <span>
                                {profileName}
                            </span>
                            <img src={downArrow} alt="menu-closed-button" />
                        </div>
                    </button>
                </div>
                <div className={style.closed_bell_button}>
                    <button className={style.closed_button_image}>
                        <img src={bell} alt="" />
                    </button>
                    <button
                        className={`${style.closed_button_image} ${style.mobile_menu_button}`}
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        <img src={menuClosed} alt="" />
                    </button>
                </div>
            </div>

            <div className={style.all_links_grid}>
                {/* // rest of lins  */}
                <div className={style.all_links}>
                    <img src={plushIcon} alt="" />
                    <span>
                        Add task
                    </span>
                </div>
                <div className={style.all_links}>
                    <img src={searchIcon} alt="" />
                    <span>
                        Search
                    </span>
                </div>
                <div className={style.all_links}>
                    <img src={calender} alt="" />
                    <span>
                        Today
                    </span>
                </div>
            </div>

        </div>
    );
};

export default LeftMenu;