import { loaderRunner } from '@my-webpack/loader-runner'
import { shared } from '@my-webpack/shared'

export default shared() + loaderRunner()
