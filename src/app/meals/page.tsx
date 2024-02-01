import Link from "next/link";

export default function MealsPage(){

    return(
        <>
            <h1>Meals Page</h1>
            <p> 
                <Link href="/meals/share"> MealsSharePage</Link>
            </p>
        </>
    );

}