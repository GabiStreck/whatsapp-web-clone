import { useEffect, useRef, useState } from "react";
import {
    ClickAwayListener,
    Grow,
    IconButton,
    MenuList,
    Popper
} from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import styled from "styled-components";

export default function MenuSetting(props) {
    const prevOpen = useRef(open);
    const [open, setOpen] = useState(false);
    const anchorRef = useRef(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }
        handleToggle(false);
    };

    const handleListKeyDown = (event) => {
        if (event.key === "Tab") {
            event.preventDefault();
            handleToggle(false);
        }
    };

    useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }
        prevOpen.current = open;
    }, [open, anchorRef]);

    return (
        <>
            <IconButton
              aria-controls={open ? "menu-list-grow" : undefined}
              aria-haspopup="true"
              onClick={handleToggle}
              ref={anchorRef}
            >
                <MoreVertIcon fontSize="small" />
            </IconButton>
            <Popper
              anchorEl={anchorRef.current}
              disablePortal
              open={open}
              role={undefined}
              transition
            >
                {({ TransitionProps, placement }) => (
                    <Grow
                      {...TransitionProps}
                      style={{ transformOrigin: placement === "bottom" ? "center top" : "center bottom" }}
                    >
                        <ContainerMenu>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList
                                  autoFocusItem={open}
                                  id="menu-list-grow"
                                  onKeyDown={handleListKeyDown}
                                >
                                    {props.children}
                                </MenuList>
                            </ClickAwayListener>
                        </ContainerMenu>
                    </Grow>
                )}
            </Popper>
        </>
    );
}

const ContainerMenu = styled.div`
    color: rgba(0, 0, 0, 0.87);
    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    background-color: #fff;
    box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12);
    border-radius: 4px;
`;

