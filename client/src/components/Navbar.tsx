import {
    ModeToggle
} from "./mode-toggle"
import {
    Button
} from "./ui/button"
import {
    Link
} from "react-router-dom"
import {
    useSelector
} from 'react-redux'
import {
    RootState
} from "@/Store";
import {
    Menu,
    Power
} from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from "@radix-ui/react-dropdown-menu";
import {
    Card
} from "./ui/card";


function Navbar() {
    const userLogin: boolean = useSelector((state : RootState) => state.isLogin);
    console.log(userLogin);

    return (
        <nav className="absolute top-0 flex items-center justify-center h-[7%] w-full bg-background text-foreground border-b ">
            <div className="flex items-center justify-between h-[70%] w-[95%] ">
                <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight text-gray-300">
                    <Link to={"/"}>Blog App</Link>
                </h3>


                <div className="hidden sm:flex sm:items-center sm:gap-2">
                    {
                    ! userLogin && (
                        <>
                            <Button>
                                <Link to={"/register"}>Register</Link>
                            </Button>
                            <Button>
                                <Link to={"/login"}>Login</Link>
                            </Button>
                        </>
                    )
                }
                    {
                    userLogin && (
                        <>
                            <Button variant={'outline'}>
                                <Link to={'/'}>Blog</Link>
                            </Button>
                            <Button variant={'outline'}>
                                <Link to={'/my-blog'}>My Blog</Link>
                            </Button>
                            <Button variant={'outline'}>
                                <Link to={"/login"}><Power size={16}/></Link>
                            </Button>
                        </>
                    )
                }
                    <ModeToggle/>
                </div>

                <div className="sm:hidden flex items-center gap-2">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline"
                                size={"icon"}><Menu size={16}/></Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-screen">
                            {userLogin && (
                            <Card className="p-3 w-full bg-purple-500 text-center">
                                <DropdownMenuItem>Blog</DropdownMenuItem>
                                <DropdownMenuItem>My Blog</DropdownMenuItem>
                                <DropdownMenuItem>
                                    Log out
                                </DropdownMenuItem>
                            </Card>)}
                            {!userLogin && (
                            <Card className="p-3 w-full bg-purple-500 text-center">
                                <DropdownMenuItem>Register</DropdownMenuItem>
                                <DropdownMenuItem>Login</DropdownMenuItem>
                            </Card>)}
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <ModeToggle/>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
