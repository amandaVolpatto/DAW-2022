import { SectionValues } from '../../components/SectionValues'
import { SectionSpecialists } from '../../components/SectionSpecialists';
import { SectionReasons } from '../../components/SectionReasons';
import { SectionCards } from '../../components/SectionCards';
import { SectionBanner} from '../../components/SectionBanner';
import './style.css'



export function HomePage() {
    return (
        <div id="home-page">
            <div className="container">
                <SectionBanner />

                <SectionCards />

                <SectionReasons />

                <SectionSpecialists />
                
                <SectionValues />
            </div>
        </div>
    )
}