<template>
    <div>
        <Header />
        <Results
            class="c-results--expand"
            :results="results"
            :text="heading.text"
            :title="heading.title"
        />
        <NewSearch />
    </div>
</template>

<script>
    import Header from '@/components/Header'
    import Results from '@/components/Results'
    import NewSearch from '@/components/NewSearch'
    export default {
        components: {
            Header,
            Results,
            NewSearch
        },
        data () {
            return {
                heading: {
                    title: 'Tus viajes',
                    text: 'Estos son los viajes encontrados según tu búsqueda'
                },
                results: [
                    {
                        days: '9 días y 7 noches',
                        destination: 'Punta Cana',
                        media: 'https://d2l4159s3q6ni.cloudfront.net/resize/480x280/filters:max_age(2604800):quality(65)/s3/dam/photos/86/46/4c/26/9fd7068a47872273405bf864557ac6b90bacf1e61414de72dd208717.jpg',
                        price: {
                            text: 'desde',
                            old: '890€',
                            value: '752€'
                        }
                    },
                    {
                        days: '9 días y 7 noches',
                        destination: 'Playa Bávaro',
                        media: 'https://d2l4159s3q6ni.cloudfront.net/resize/480x280/filters:max_age(2604800):quality(65)/s3/dam/photos/de/8e/de/68/d9364eaa239f28a4ce37256eb9b897fa95a5bbf28a42496d82077594.jpg',
                        price: {
                            text: 'desde',
                            old: '890€',
                            value: '752€'
                        }
                    },
                    {
                        days: '9 días y 7 noches',
                        destination: 'Punta Cana',
                        media: 'https://d2l4159s3q6ni.cloudfront.net/resize/480x280/filters:max_age(2604800):quality(65)/s3/dam/photos/86/46/4c/26/9fd7068a47872273405bf864557ac6b90bacf1e61414de72dd208717.jpg',
                        price: {
                            text: 'desde',
                            old: '2.000€',
                            value: '1.752€'
                        }
                    },
                    {
                        days: '9 días y 7 noches',
                        destination: 'Playa Bávaro',
                        media: 'https://d2l4159s3q6ni.cloudfront.net/resize/480x280/filters:max_age(2604800):quality(65)/s3/dam/photos/de/8e/de/68/d9364eaa239f28a4ce37256eb9b897fa95a5bbf28a42496d82077594.jpg',
                        price: {
                            text: 'desde',
                            old: '1.290€',
                            value: '1.099€'
                        }
                    }
                ]
            }
        }
    }
</script>
