import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout, selectuser } from "../redux/UserSlice";

function Header() {
    const user = useSelector(logout);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(logout());
        navigate('/');
    };

    return (
        <>
            {/* header */}

            <header className="header" id="header">
                <div className="header_toggle"> <i className='fa fa-close' id="header-toggle"></i> </div>
            </header>
            {/* side bar */}
            <div className="main-sidebar" id="nav-bar">
                <div className="new-story">
                    <Link to="/list" className="btn blue-gradient-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                            <path d="M8.25 9.75H3.75V8.25H8.25V3.75H9.75V8.25H14.25V9.75H9.75V14.25H8.25V9.75Z" fill="white" />
                        </svg>  New Story
                    </Link>
                </div>
                <nav className="nav">
                    <div className="menu">
                        <h3>MENU</h3>
                        <ul>
                            <li><Link to="/card" className="nav_link active">
                                <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.66665 13.6667C5.20831 13.6667 4.81581 13.5034 4.48915 13.1767C4.16248 12.85 3.99942 12.4578 3.99998 12V10.3334C3.99998 10.0973 4.07998 9.89921 4.23998 9.73921C4.39998 9.57921 4.59776 9.49949 4.83331 9.50004H6.49998V7.62504C6.08331 7.59726 5.66998 7.51032 5.25998 7.36421C4.84998 7.2181 4.49248 6.99948 4.18748 6.70837C4.10415 6.62504 4.03831 6.53115 3.98998 6.42671C3.94165 6.32226 3.9172 6.21476 3.91665 6.10421V5.54171H3.31248C3.20137 5.54171 3.09387 5.52087 2.98998 5.47921C2.88609 5.43754 2.7922 5.37504 2.70831 5.29171L0.833313 3.41671C0.666646 3.25004 0.583313 3.0556 0.583313 2.83337C0.583313 2.61115 0.666646 2.41671 0.833313 2.25004C1.23609 1.84726 1.77776 1.55226 2.45831 1.36504C3.13887 1.17782 3.76387 1.08393 4.33331 1.08337C4.70831 1.08337 5.07304 1.11115 5.42748 1.16671C5.78192 1.22226 6.13942 1.32643 6.49998 1.47921C6.49998 1.15976 6.61109 0.88893 6.83331 0.666707C7.05554 0.444485 7.32637 0.333374 7.64581 0.333374H14.8333C15.2916 0.333374 15.6841 0.496707 16.0108 0.823374C16.3375 1.15004 16.5005 1.54226 16.5 2.00004V11.1667C16.5 11.8612 16.2569 12.4514 15.7708 12.9375C15.2847 13.4237 14.6944 13.6667 14 13.6667H5.66665ZM8.16665 9.50004H12.3333C12.5694 9.50004 12.7675 9.58004 12.9275 9.74004C13.0875 9.90004 13.1672 10.0978 13.1666 10.3334V11.1667C13.1666 11.4028 13.2466 11.6009 13.4066 11.7609C13.5666 11.9209 13.7644 12.0006 14 12C14.2361 12 14.4341 11.92 14.5941 11.76C14.7541 11.6 14.8339 11.4023 14.8333 11.1667V2.00004H8.16665V2.50004L12.9375 7.27087C13.0625 7.39587 13.1389 7.53837 13.1666 7.69837C13.1944 7.85837 13.1736 8.01448 13.1041 8.16671C13.0347 8.31948 12.9375 8.44087 12.8125 8.53087C12.6875 8.62087 12.5278 8.66615 12.3333 8.66671C12.2222 8.66671 12.1144 8.64226 12.01 8.59337C11.9055 8.54449 11.8189 8.4856 11.75 8.41671L9.62498 6.29171L9.45831 6.45837C9.26387 6.65282 9.05887 6.82643 8.84331 6.97921C8.62776 7.13199 8.4022 7.25004 8.16665 7.33337V9.50004ZM3.66665 3.87504H4.74998C4.98609 3.87504 5.18415 3.95504 5.34415 4.11504C5.50415 4.27504 5.58387 4.47282 5.58331 4.70837V5.66671C5.74998 5.77782 5.92359 5.85421 6.10415 5.89587C6.2847 5.93754 6.4722 5.95837 6.66665 5.95837C6.98609 5.95837 7.27442 5.90976 7.53165 5.81254C7.78887 5.71532 8.0422 5.54171 8.29165 5.29171L8.45831 5.12504L7.29165 3.95837C6.88887 3.5556 6.43748 3.25337 5.93748 3.05171C5.43748 2.85004 4.90276 2.74949 4.33331 2.75004C4.05554 2.75004 3.79165 2.77087 3.54165 2.81254C3.29165 2.85421 3.04165 2.91671 2.79165 3.00004L3.66665 3.87504ZM11.5 11.1667H5.66665V12H11.625C11.5833 11.875 11.5519 11.7431 11.5308 11.6042C11.5097 11.4653 11.4994 11.3195 11.5 11.1667Z" fill="white" />
                                </svg>  Manage Stories  </Link>
                            </li>
                            <li><Link to="/subscription" className="nav_link ">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.9375 3.75H4.0625C2.85438 3.75 1.875 4.72938 1.875 5.9375V14.0625C1.875 15.2706 2.85438 16.25 4.0625 16.25H15.9375C17.1456 16.25 18.125 15.2706 18.125 14.0625V5.9375C18.125 4.72938 17.1456 3.75 15.9375 3.75Z" stroke="white" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M1.875 7.5H18.125M5 11.7188H6.875V12.5H5V11.7188Z" stroke="white" stroke-width="2.34375" stroke-linejoin="round" />
                                </svg>
                                Manage Subscription    </Link>
                            </li>
                            <li>
                                <Link to="/static" className="nav_link active">
                                    <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.3334 7.81667L15.8667 1.70833L17.3084 2.54167L12.95 10.0833L7.52502 6.95833L3.55002 13.8333H17.3334V15.5H0.666687V0.5H2.33335V12.6167L6.91669 4.66667L12.3334 7.81667Z" fill="white" />
                                    </svg>
                                    Statistics
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="menu">
                        <h3>General</h3>
                        <ul>
                            <li><Link to="/profile" className="nav_link active">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.99998 4.93748C8.19649 4.93748 7.41105 5.17574 6.74298 5.62213C6.0749 6.06853 5.5542 6.703 5.24672 7.44533C4.93924 8.18765 4.85879 9.00449 5.01554 9.79253C5.17229 10.5806 5.55921 11.3045 6.12736 11.8726C6.69551 12.4408 7.41938 12.8277 8.20743 12.9844C8.99547 13.1412 9.81231 13.0607 10.5546 12.7532C11.297 12.4458 11.9314 11.9251 12.3778 11.257C12.8242 10.5889 13.0625 9.80347 13.0625 8.99998C13.0612 7.92292 12.6328 6.89033 11.8712 6.12873C11.1096 5.36713 10.077 4.93872 8.99998 4.93748ZM8.99998 11.1875C8.56733 11.1875 8.1444 11.0592 7.78467 10.8188C7.42494 10.5785 7.14456 10.2368 6.97899 9.8371C6.81343 9.43739 6.77011 8.99755 6.85451 8.57322C6.93892 8.14889 7.14726 7.75911 7.45319 7.45318C7.75911 7.14726 8.14889 6.93892 8.57322 6.85451C8.99755 6.77011 9.43739 6.81343 9.8371 6.97899C10.2368 7.14456 10.5785 7.42494 10.8188 7.78467C11.0592 8.1444 11.1875 8.56733 11.1875 8.99998C11.1875 9.58014 10.957 10.1365 10.5468 10.5468C10.1365 10.957 9.58014 11.1875 8.99998 11.1875ZM16.1875 9.0617V8.93826L17.2812 7.57029C17.373 7.45567 17.4366 7.32108 17.4669 7.17737C17.4972 7.03367 17.4932 6.88486 17.4555 6.74295C17.2581 5.9985 16.9631 5.28344 16.5781 4.61639C16.5039 4.48918 16.4009 4.38124 16.2772 4.30129C16.1536 4.22135 16.0128 4.17165 15.8664 4.15623L14.1258 3.96092L14.039 3.8742L13.8437 2.13279C13.8282 1.9865 13.7784 1.84591 13.6985 1.7224C13.6186 1.5989 13.5107 1.49594 13.3836 1.42185C12.7165 1.03567 12.0011 0.739607 11.2562 0.541386C11.1142 0.50415 10.9654 0.500799 10.8218 0.531603C10.6783 0.562407 10.5439 0.626504 10.4297 0.71873L9.0617 1.81248H8.93826L7.57029 0.71873C7.45567 0.626918 7.32108 0.563319 7.17738 0.533058C7.03367 0.502796 6.88486 0.50672 6.74295 0.544511C5.99831 0.743114 5.28324 1.03944 4.61639 1.42576C4.48968 1.49954 4.38204 1.60201 4.30213 1.72494C4.22221 1.84787 4.17224 1.98783 4.15623 2.13357L3.96092 3.8742L3.8742 3.96092L2.13279 4.15623C1.9865 4.17177 1.84591 4.22152 1.72241 4.30146C1.5989 4.3814 1.49594 4.48928 1.42186 4.61639C1.03676 5.28365 0.741746 5.99899 0.544512 6.74373C0.506849 6.88553 0.502992 7.03418 0.533251 7.17774C0.56351 7.3213 0.62704 7.45576 0.71873 7.57029L1.81248 8.93826V9.0617L0.71873 10.4297C0.626919 10.5443 0.563319 10.6789 0.533058 10.8226C0.502797 10.9663 0.50672 11.1151 0.544512 11.257C0.743361 12.0017 1.03995 12.7168 1.42654 13.3836C1.50024 13.5102 1.60259 13.6178 1.72538 13.6977C1.84816 13.7776 1.98797 13.8276 2.13357 13.8437L3.8742 14.0375L3.96092 14.1242L4.15623 15.8672C4.17177 16.0135 4.22152 16.154 4.30146 16.2776C4.3814 16.4011 4.48928 16.504 4.61639 16.5781C5.28349 16.9643 5.99883 17.2604 6.74373 17.4586C6.88577 17.4958 7.03457 17.4992 7.17814 17.4684C7.32171 17.4376 7.45603 17.3735 7.57029 17.2812L8.93826 16.1875H9.0617L10.4297 17.2812C10.5443 17.373 10.6789 17.4366 10.8226 17.4669C10.9663 17.4972 11.1151 17.4932 11.257 17.4554C12.0015 17.2581 12.7165 16.9631 13.3836 16.5781C13.5106 16.5045 13.6185 16.4021 13.6987 16.2792C13.7789 16.1562 13.8291 16.0162 13.8453 15.8703L14.039 14.1297L14.1258 14.0429L15.8672 13.8437C16.0131 13.8276 16.1531 13.7773 16.2761 13.6971C16.399 13.617 16.5014 13.509 16.575 13.382C16.9612 12.7149 17.2572 11.9996 17.4555 11.2547C17.4929 11.1131 17.4966 10.9647 17.4663 10.8215C17.4361 10.6782 17.3727 10.544 17.2812 10.4297L16.1875 9.0617ZM14.3031 8.67967C14.3156 8.89303 14.3156 9.10693 14.3031 9.32029C14.2891 9.55223 14.3618 9.78108 14.507 9.96248L15.5101 11.2164C15.4154 11.4967 15.3024 11.7704 15.1719 12.0359L13.5758 12.2133C13.3447 12.2397 13.1317 12.3511 12.9781 12.5258C12.8362 12.6857 12.6849 12.837 12.525 12.9789C12.3503 13.1324 12.2389 13.3455 12.2125 13.5765L12.0359 15.1719C11.7705 15.303 11.4967 15.4165 11.2164 15.5117L9.96248 14.5078C9.79607 14.375 9.58943 14.3028 9.37654 14.3031H9.32029C9.10694 14.3156 8.89303 14.3156 8.67967 14.3031C8.44789 14.2894 8.2192 14.3617 8.03748 14.5062L6.78357 15.5101C6.50328 15.4154 6.22952 15.3024 5.96404 15.1719L5.7867 13.5758C5.76028 13.3447 5.6489 13.1317 5.4742 12.9781C5.31431 12.8362 5.163 12.6849 5.02107 12.525C4.86752 12.3503 4.6545 12.2389 4.42342 12.2125L2.82811 12.0359C2.69699 11.7705 2.58346 11.4967 2.48826 11.2164L3.49139 9.96248C3.63659 9.78108 3.70925 9.55223 3.69529 9.32029C3.68279 9.10693 3.68279 8.89303 3.69529 8.67967C3.70925 8.44773 3.63659 8.21888 3.49139 8.03748L2.48982 6.78357C2.58452 6.50328 2.69752 6.22952 2.82811 5.96404L4.4242 5.7867C4.65529 5.76028 4.8683 5.6489 5.02186 5.4742C5.16378 5.3143 5.31509 5.163 5.47498 5.02107C5.64968 4.86752 5.76106 4.6545 5.78748 4.42342L5.96404 2.8281C6.22948 2.69699 6.50325 2.58346 6.78357 2.48826L8.03748 3.49217C8.2192 3.63669 8.44789 3.70902 8.67967 3.69529C8.89303 3.68279 9.10694 3.68279 9.32029 3.69529C9.55213 3.70947 9.78097 3.63709 9.96248 3.49217L11.2164 2.48826C11.4967 2.58346 11.7705 2.69699 12.0359 2.8281L12.2133 4.4242C12.2397 4.65528 12.3511 4.8683 12.5258 5.02185C12.6857 5.16378 12.837 5.31509 12.9789 5.47498C13.1324 5.64968 13.3455 5.76106 13.5765 5.78748L15.1719 5.96404C15.303 6.22948 15.4165 6.50324 15.5117 6.78357L14.5086 8.03748C14.3628 8.21865 14.2896 8.44753 14.3031 8.67967Z" fill="white" />
                                </svg>Setting  </Link>
                            </li>
                            <li>
                                <div onClick={handleLogout}>
                                    <Link className="nav_link ">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2.16667 15.5C1.70833 15.5 1.31583 15.3367 0.989168 15.01C0.662501 14.6833 0.499446 14.2911 0.500001 13.8333V2.16667C0.500001 1.70833 0.663335 1.31583 0.990001 0.989168C1.31667 0.662501 1.70889 0.499446 2.16667 0.500001H8V2.16667H2.16667V13.8333H8V15.5H2.16667ZM11.3333 12.1667L10.1875 10.9583L12.3125 8.83333H5.5V7.16667H12.3125L10.1875 5.04167L11.3333 3.83334L15.5 8L11.3333 12.1667Z" fill="white" />
                                        </svg>
                                        Logout  </Link>

                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            {/* end side bar */}
        </>);
}

export default Header;