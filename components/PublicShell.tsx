import {SiteHeader,Footer} from '../app/layout';
export default function PublicShell({children}:{children:React.ReactNode}){return <><SiteHeader/>{children}<Footer/></>}
