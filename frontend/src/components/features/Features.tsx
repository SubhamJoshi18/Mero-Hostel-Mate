import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';

export default function Features() {
    const featureList = [
        {
            icon: <SentimentSatisfiedAltIcon/>,
            title:"Customer Delight",
            description:"We deliver the best service and experience for our customer"
        },
        {
            icon: <SentimentSatisfiedAltIcon/>,
            title:"Customer Delight",
            description:"We deliver the best service and experience for our customer"
        },
        {
            icon: <SentimentSatisfiedAltIcon/>,
            title:"Customer Delight",
            description:"We deliver the best service and experience for our customer"
        },
        {
            icon: <SentimentSatisfiedAltIcon/>,
            title:"Customer Delight",
            description:"We deliver the best service and experience for our customer"
        }
    ]
    return (
        <>
            <div className='bg-gray-400 h-auto'>
                <div className='container mx-auto'>
                    <div className='grid grid-cols-4 gap-4'>
                        {featureList.map((feature,index) =>(
                            <div key={index} className="feature-item">
                                <div className="feature-icon">{feature.icon}</div>
                                <h3 className="feature-title">{feature.title}</h3>
                                <p className="feature-description">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
