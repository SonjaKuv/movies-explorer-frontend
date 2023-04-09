import './AboutWeek.css';

function AboutWeek({weekClass, title, subtitle}) {
    return (
        <div className='week'>
            <div className={weekClass}>{title}</div>
            <p className='week__subtitle'>{subtitle}</p>
        </div>
    )
}

export default AboutWeek;
