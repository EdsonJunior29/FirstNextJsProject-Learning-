interface BlogPostPageProps {
    params: {
      slug: string;
    };
  }

export default function BlogPostPage( { params }: BlogPostPageProps) {
    return (
        <>
            <h1>Blog Post Page</h1>
            <p>{ params.slug }</p>
        </>
    );
  }