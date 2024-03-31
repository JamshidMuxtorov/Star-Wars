import { useState } from "react"
import ErrorMessage from "components/PeoplePage/ErrorMessage"
export const withError = View => {
    return props => {
        const [error, setError] = useState(false)
        return (
            <>

                {error ? <ErrorMessage /> : (

                    <View
                        setError={setError}
                        {...props}
                    />


                )}





            </>
        )
    }
}