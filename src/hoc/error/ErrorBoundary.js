import React from 'react'
import { Typography, Button } from 'aida-ui'

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props)
        this.state = { error: null, errorInfo: null, hasError: false }
    }

    static getDerivedStateFromError(error) {
        return { hasError: true }
    }

    componentDidCatch(error, errorInfo) {
        // Catch errors in any components below and re-render with error message
        this.setState({
            error: error,
            errorInfo: errorInfo,
        })
        console.log(error)
        // You can also log error messages to an error reporting service here
    }

    render() {
        const { hasError, errorInfo } = this.state
        if (hasError) {
            return (
                <div className="h-screen flex justify-center items-center">
                    <div className="w-1/3 bg-white border-2 border-gray-300 p-6 rounded-md tracking-wide shadow-lg">
                        <div
                            id="header"
                            className="flex flex-col items-center mb-4 justify-between"
                        >
                            <Typography
                                fontFamily="Open Sans"
                                weight={500}
                                variant="regular"
                                color="#1a202c"
                                classes={{
                                    root: 'text-2xl md:text-3xl font-light leading-normal mb-2',
                                }}
                            >
                                Ups occoreu um erro!
                            </Typography>

                            <Button
                                onClick={() => window.location.reload()}
                                className="px-4 inline py-2 text-sm leading-5 shadow transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-blue-300 active:bg-blue-600 hover:bg-blue-700"
                                backgroundColor="#7097b4"
                                color="#ffffff"
                            >
                                Carregar a página outra vez
                            </Button>
                        </div>
                        {errorInfo && (
                            <Typography
                                fontFamily="Open Sans"
                                weight={300}
                                variant="xsmall"
                                color="#1a202c"
                            >
                                {errorInfo.componentStack.toString()}
                            </Typography>
                        )}
                    </div>
                </div>
            )
        }
        return this.props.children
    }
}

export default ErrorBoundary
