import { hourly_sales } from "../data";
import { locations } from "../data";
// import { totals } from "../data";

export default function ReportTable({formData}) {
    return (
        <div className="flex items-center justify-center m-8">
            <table className='text-center'>
                <thead>
                    <tr>
                        {hourly_sales.map((item , index) => (
                            <th key={item} className='p-4 bg-green-600'>{item}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {formData.map((item,indx)=>(
                        <tr key={indx} className={indx % 2 != 0 ? 'bg-green-300' : 'bg-green-400'}>
                            <td className='border border-black '>{item.location}</td>
                            {locations.map((item,indx)=>(
                                <td key={item} className='border border-black '>{item}</td>
                            ))}
                        </tr>
                    ))}

                </tbody>
                <tfoot>
                    <tr>
                        <td className='p-4 font-bold bg-green-600 border border-black'>Totals</td>
                        {locations.map((item , index) => (
                            <td key={index} className='p-4 font-bold bg-green-600 border border-black' >{item*formData.length}</td>
                        ))}
                    </tr>
                </tfoot>
            </table>

        </div>
    )
}