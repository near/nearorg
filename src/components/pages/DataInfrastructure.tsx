import { Button } from '../lib/Button';
import { Container } from '../lib/Container';
import { ContentWithImage } from '../lib/ContentWithImage';
import { Flex } from '../lib/Flex';
import { Pattern, PatternContent } from '../lib/Pattern';
import { Section } from '../lib/Section';
import { H1, H2, Text } from '../lib/Text';
import { Wrapper } from '../lib/Wrapper';

const images = {
  illustrations: {
    bigQuery: 'bafkreidvzhed5xtbswgzrcu4woho5jwql53wzagfmkafjcpxivmxv6tkcm',
    queryApi: 'bafkreie5lvklwktdgvxyachxn4zkwb4pzkroqfopsu4zcb4ffyu5urcm6a',
    nearLake: 'bafkreial6oat5r6howyc42xqgvwuicgs6yiaczywxm2t3reiclotww7slu',
  },
};

function returnImageSrc(cfid: string) {
  return `/images/data-infrastructure/${cfid}.png`;
}

export const DataInfrastructure = () => {
  return (
    <Wrapper>
      <Section $backgroundColor="#F77A69" style={{ padding: '72px 0' }}>
        <Container $center>
          <Pattern>
            <PatternContent>
              <Flex $gap="32px" $direction="column" $alignItems="center">
                <H1>Effortless data indexing & management</H1>

                <Text $size="text-l" $mobileSize="text-base">
                  Choose the data solution that fits your needs. Access and monitor on-chain data through public
                  datasets, or scaffold your own infrastructure.
                </Text>
              </Flex>
            </PatternContent>
          </Pattern>
        </Container>
      </Section>

      <Section $backgroundColor="#F2F1EA">
        <Container>
          <Flex $direction="column" $gap="24px">
            <H2 style={{ maxWidth: '1016px' }}>BigQuery public dataset: all the data, zero setup</H2>
            <Text $size="text-2xl" $mobileSize="text-l" style={{ maxWidth: '808px' }}>
              A large dataset with on-chain data publicly available on Google Cloud Platform. Obtain near real-time
              blockchain data using simple SQL queries.
            </Text>
          </Flex>

          <ContentWithImage
            src={returnImageSrc(images.illustrations.bigQuery)}
            imageSide="left"
            alt="A line drawing of the BigQuery logo, a magnifying glass inside a hexagon with a bar graph inside the glass, set behind a console window with a code snippet"
          >
            <Flex $direction="column" $gap="60px">
              <Flex $direction="column" $gap="24px">
                <Text $size="text-xl" $mobileSize="text-l" $weight="500">
                  Instant insights
                </Text>
                <Text>Historic on-chain data queried at scale. No need to run your own infrastructure.</Text>
              </Flex>

              <Flex $direction="column" $gap="24px">
                <Text $size="text-xl" $mobileSize="text-l" $weight="500">
                  Cost-effective
                </Text>
                <Text>
                  Eliminate the need to store and process bulk NEAR Protocol data. Query as little or as much data as
                  you like.
                </Text>
              </Flex>

              <Flex $direction="column" $gap="24px">
                <Text $size="text-xl" $mobileSize="text-l" $weight="500">
                  As easy as SQL
                </Text>
                <Text>
                  No prior experience with blockchain technology is required. Just bring a general knowledge of SQL to
                  unlock insights.
                </Text>
              </Flex>

              <div>
                <Button
                  href="https://docs.near.org/bos/queryapi/big-query"
                  target="_blank"
                  label="Read BigQuery Docs"
                  variant="secondary"
                  fill="outline"
                  size="large"
                />
              </div>
            </Flex>
          </ContentWithImage>

          <Flex $direction="column" $gap="24px">
            <H2 style={{ maxWidth: '1016px' }}>QueryAPI: indexers made simple</H2>
            <Text $size="text-2xl" $mobileSize="text-l" style={{ maxWidth: '808px' }}>
              A fully managed solution to build indexer functions, extract on-chain data, and easily query it using
              GraphQL endpoints and subscriptions.
            </Text>
          </Flex>

          <ContentWithImage
            src={returnImageSrc(images.illustrations.queryApi)}
            imageSide="right"
            alt="A console window with a code snippet"
          >
            <Flex $direction="column" $gap="60px">
              <Flex $direction="column" $gap="24px">
                <Text $size="text-xl" $mobileSize="text-l" $weight="500">
                  Your data, your way
                </Text>
                <Text>
                  Decide how you want to store data. Design the tables and databases that better suit your needs.
                </Text>
              </Flex>

              <Flex $direction="column" $gap="24px">
                <Text $size="text-xl" $mobileSize="text-l" $weight="500">
                  Indexers made simple
                </Text>
                <Text>
                  Create the logic of your indexer and we will execute it for you. Forget about infrastructure—focus on
                  solutions.
                </Text>
              </Flex>

              <Flex $direction="column" $gap="24px">
                <Text $size="text-xl" $mobileSize="text-l" $weight="500">
                  Plug & play to your app
                </Text>
                <Text>
                  Fetch your data from any application through our API. Leverage GraphQL to query exactly what you need.
                </Text>
              </Flex>

              <div>
                <Button
                  href="https://docs.near.org/bos/queryapi/intro"
                  target="_blank"
                  label="Read QueryAPI Docs"
                  variant="secondary"
                  fill="outline"
                  size="large"
                />
              </div>
            </Flex>
          </ContentWithImage>
        </Container>
      </Section>

      <Section $backgroundColor="#000000">
        <Container>
          <Flex $direction="column" $gap="24px">
            <H2 style={{ color: 'var(--white)' }}>NEAR Lake</H2>
            <Text $size="text-2xl" $mobileSize="text-l" color="white" style={{ maxWidth: '808px' }}>
              A solution that watches over the NEAR network and stores all the events for your easy access.
            </Text>
          </Flex>

          <ContentWithImage
            src={returnImageSrc(images.illustrations.nearLake)}
            imageSide="left"
            alt="Three squares each with a line drawing inside: a data tower, code brackets, and three wiggling lines representing water"
          >
            <Flex $direction="column" $gap="60px">
              <Flex $direction="column" $gap="24px">
                <Text color="white" $size="text-xl" $mobileSize="text-l" $weight="500">
                  Cost-efficient solution
                </Text>
                <Text color="white">
                  Cost-efficient solution for building self-hosted indexers in Rust, JavaScript, Python, Go and other
                  languages
                </Text>
              </Flex>

              <Flex $direction="column" $gap="24px">
                <Text color="white" $size="text-xl" $mobileSize="text-l" $weight="500">
                  Streamlined data management
                </Text>
                <Text color="white">
                  Use NEAR Lake Framework to stream blocks to your server directly from NEAR Lake
                </Text>
              </Flex>

              <div>
                <Button
                  href="https://docs.near.org/concepts/advanced/near-lake-framework"
                  target="_blank"
                  label="Read NEAR Lake Docs"
                  variant="secondary"
                  fill="outline"
                  size="large"
                  className="darkButton"
                />
              </div>
            </Flex>
          </ContentWithImage>
        </Container>
      </Section>

      <Section $backgroundColor="#F77A69">
        <Container>
          <Flex $direction="column" $gap="50px" $alignItems="center">
            <Flex $direction="column" $gap="20px" $alignItems="center" style={{ textAlign: 'center' }}>
              <Text $size="text-3xl" $weight="500" style={{ maxWidth: '600px' }}>
                Unlock data for your App
              </Text>

              <Text $size="text-l" $mobileSize="text-l" style={{ maxWidth: '600px' }}>
                Use the solution that best fits your needs. Access data through open databases, create and execute
                indexer logic, or run your own infrastructure.
              </Text>
            </Flex>

            <Flex $gap="24px" $wrap="wrap" $alignItems="center" $justifyContent="center">
              <Button
                href="https://docs.near.org/bos/queryapi/big-query"
                target="_blank"
                label="BigQuery Docs"
                variant="secondary"
                size="large"
              />

              <Button
                href="https://docs.near.org/bos/queryapi/intro"
                target="_blank"
                label="QueryAPI Docs"
                variant="primary"
                size="large"
              />

              <Button
                href="https://docs.near.org/tools/indexing"
                target="_blank"
                label="Indexing Docs"
                variant="secondary"
                fill="outline"
                size="large"
              />
            </Flex>
          </Flex>
        </Container>
      </Section>
    </Wrapper>
  );
};
