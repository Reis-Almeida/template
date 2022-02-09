import Icon from '../../shared/icons'
import company from '../../shared/json/company'

export default function SocialNetwork() {
    return (
        <span>
            <a href={company.twitter} target="_blank" rel="noreferrer" ><Icon.twitter /></a>
            <a href={company.facebook} target="_blank" rel="noreferrer" ><Icon.facebook /></a>
            <a href={company.instagram} target="_blank" rel="noreferrer" ><Icon.instagram /></a>
            <a href={company.pinterest} target="_blank" rel="noreferrer" ><Icon.pinterest /></a>
            <a href={company.linkedin} target="_blank" rel="noreferrer" ><Icon.linkedin /></a>
        </span>
    )
}