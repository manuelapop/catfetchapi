import { Button, Card, Image, Placeholder } from 'semantic-ui-react'

interface PlaceholderProps {
    header: string;
    loading: boolean;
    avatar: string;
    description: string;
    onPrev: () => void;
    onFetch: () => void;
    onNext: () => void;
}


function PlaceholderCard({ header, loading, avatar, description, onFetch, onPrev, onNext }: PlaceholderProps) {
    return (
        <>

            <Card.Group doubling itemsPerRow={1} stackable>
                {
                    <Card key={header}>
                        {loading ? (
                            <Placeholder style={{ height: 450, width: 450 }}>
                                <Placeholder.Image square className="photo"/>
                            </Placeholder>
                        ) : (
                            <Image src={avatar} />
                        )}

                        <Card.Content>
                            {loading ? (
                                <Placeholder>
                                    <Placeholder.Header>
                                        <Placeholder.Line length='very short' />
                                        <Placeholder.Line length='medium' />
                                    </Placeholder.Header>
                                    <Placeholder.Paragraph>
                                        <Placeholder.Line length='short' />
                                    </Placeholder.Paragraph>
                                </Placeholder>
                            ) : (
                                <>
                                    <Card.Header>{header}</Card.Header>
                                    <Card.Description>{description}</Card.Description>
                                    <div className="btn-fetch">
                                        <Button disabled={loading} primary onClick={() => onFetch()}>
                                            Fetch New Image
                                            </Button>
                                    </div>
                                </>
                            )}
                        </Card.Content>

                        <Card.Content extra>
                            <Button primary onClick={() => onPrev()}>
                                Previous
                  </Button>
                            <Button primary onClick={() => onNext()}>Next</Button>
                        </Card.Content>
                    </Card>}
            </Card.Group>
        </>
    )
}

export default PlaceholderCard;
