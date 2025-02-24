import { Button, ContentWithImage, Flex, Pattern, Section, Text } from '@near-pagoda/ui';

const images = {
  illustrations: {
    bigQuery: 'bafkreidvzhed5xtbswgzrcu4woho5jwql53wzagfmkafjcpxivmxv6tkcm',
    nearLake: 'bafkreial6oat5r6howyc42xqgvwuicgs6yiaczywxm2t3reiclotww7slu',
  },
};

function returnImageSrc(cfid: string) {
  return `/images/data-infrastructure/${cfid}.png`;
}

export const DataInfrastructure = () => {
  return (
    <>
      <Section background="red9" style={{ textAlign: 'center' }}>
        <Pattern>
          <Flex gap="l" stack align="center">
            <Text as="h1" size="text-hero-l">
              Effortless data indexing & management
            </Text>

            <Text size="text-l" weight={400}>
              Choose the data solution that fits your needs. Access and monitor on-chain data through public datasets,
              or scaffold your own infrastructure.
            </Text>
          </Flex>
        </Pattern>
      </Section>

      <Section gap="2xl" padding="hero" background="amber2">
        <Flex stack gap="l">
          <Text as="h2" size="text-hero-m" style={{ maxWidth: '1016px' }}>
            BigQuery public dataset: all the data, zero setup
          </Text>
          <Text size="text-2xl" weight={400} style={{ maxWidth: '808px' }}>
            A large dataset with on-chain data publicly available on Google Cloud Platform. Obtain near real-time
            blockchain data using simple SQL queries.
          </Text>
        </Flex>

        <ContentWithImage
          src={returnImageSrc(images.illustrations.bigQuery)}
          imageSide="left"
          alt="A line drawing of the BigQuery logo, a magnifying glass inside a hexagon with a bar graph inside the glass, set behind a console window with a code snippet"
        >
          <Flex stack gap="xl">
            <Flex stack>
              <Text size="text-xl" weight="500">
                Instant insights
              </Text>
              <Text>Historic on-chain data queried at scale. No need to run your own infrastructure.</Text>
            </Flex>

            <Flex stack>
              <Text size="text-xl" weight="500">
                Cost-effective
              </Text>
              <Text>
                Eliminate the need to store and process bulk NEAR Protocol data. Query as little or as much data as you
                like.
              </Text>
            </Flex>

            <Flex stack>
              <Text size="text-xl" weight="500">
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
      </Section>

      <Section gap="2xl" padding="hero" background="black">
        <Flex stack gap="l">
          <Text as="h2" size="text-hero-m" style={{ color: 'var(--white)' }}>
            NEAR Lake
          </Text>
          <Text size="text-2xl" color="white" weight={400} style={{ maxWidth: '808px' }}>
            A solution that watches over the NEAR network and stores all the events for your easy access.
          </Text>
        </Flex>

        <ContentWithImage
          src={returnImageSrc(images.illustrations.nearLake)}
          imageSide="left"
          alt="Three squares each with a line drawing inside: a data tower, code brackets, and three wiggling lines representing water"
        >
          <Flex stack gap="xl">
            <Flex stack>
              <Text color="white" size="text-xl" weight="500">
                Cost-efficient solution
              </Text>
              <Text color="white">
                Cost-efficient solution for building self-hosted indexers in Rust, JavaScript, Python, Go and other
                languages
              </Text>
            </Flex>

            <Flex stack>
              <Text color="white" size="text-xl" weight="500">
                Streamlined data management
              </Text>
              <Text color="white">Use NEAR Lake Framework to stream blocks to your server directly from NEAR Lake</Text>
            </Flex>

            <div>
              <Button
                href="https://docs.near.org/build/data-infrastructure/lake-framework/building-indexers/primitives"
                target="_blank"
                label="Read NEAR Lake Docs"
                variant="affirmative"
                size="large"
              />
            </div>
          </Flex>
        </ContentWithImage>
      </Section>

      <Section gap="2xl" padding="hero" background="red9" style={{ textAlign: 'center' }}>
        <Flex stack gap="xl" align="center">
          <Flex stack gap="l" align="center" style={{ maxWidth: '600px' }}>
            <Text size="text-3xl" weight="500">
              Unlock data for your App
            </Text>

            <Text size="text-l">
              Use the solution that best fits your needs. Access data through open databases, create and execute indexer
              logic, or run your own infrastructure.
            </Text>
          </Flex>

          <Flex gap="l" wrap align="center" justify="center">
            <Button
              href="https://docs.near.org/bos/queryapi/big-query"
              target="_blank"
              label="BigQuery Docs"
              variant="secondary"
              size="large"
            />

            <Button
              href="https://docs.near.org/build/data-infrastructure/data-apis"
              target="_blank"
              label="Data API Docs"
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
      </Section>
    </>
  );
};
