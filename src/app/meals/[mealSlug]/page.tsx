interface MealsPageProps {
    params: {
      slug: string;
    };
  }

  export default function MealsSlugPage( { params }: MealsPageProps) {
    return (
        <>
            <h1>Meals Slug Page</h1>
            <p>{ params.slug }</p>
        </>
    );
  }