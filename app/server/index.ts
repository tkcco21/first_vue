import { app } from './app'

const server = app.listen(app.get('port'), (): void => {
  console.log(' ')
  console.log('>>============================')
  console.log(
    '  App is running at http://localhost:%d in %s mode',
    app.get('port'),
    app.get('env'),
  )
  console.log('  Press CTRL-C to stop')
  console.log('>>============================')
  console.log(' ')
})

export default server
