import { hourly_sales } from "../data";
import { locations } from "../data";
import { totals } from "../data";

export default function ReportTable() {
    return (
        <div className="flex items-center justify-center m-8">
            <table className='text-center'>
                <thead>
                    <tr>
                        {hourly_sales.map((item , index) => (
                            <th key={index} className='p-4 bg-green-600'>{item}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>

                    {locations.map((item , index) => (
                        <tr key={index} className={index % 2 != 0 ? 'bg-green-300' : 'bg-green-400'}>
                            {item.map((element , index) => (
                                <td key={index} className='border border-black '>{element}</td>
                            ))}
                        </tr>
                    ))}

                </tbody>
                <tfoot>
                    <tr>
                        {totals.map((item , index) => (
                            <td key={index} className='p-4 font-bold bg-green-600 border border-black' >{item}</td>
                        ))}
                    </tr>
                </tfoot>
            </table>

        </div>
    )
}