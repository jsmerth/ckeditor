import { Component, ReactNode, useState, createRef } from 'react'
import Editor from 'ckeditor5-custom-build/build/ckeditor';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import Config from './config.json'

import './css/main.less'

class App extends Component {

  constructor(props: any) {
    super(props);
  }

  state = {
    isLayoutReady: false
  }

  componentDidMount() {
    this.setState({ isLayoutReady: true })
    console.log('did mount');
  }

  render(): ReactNode {
    return (
      <>
        <div className="flex flex-col">
          <div className='flex flex-row justify-between items-center px-4 ctr ctr-header'>
            <h2>Video-File-Name-Here</h2>
            <a href="#">X</a>
          </div>
          <div className='flex flex-col justify-center items-center ctr ctr-video'>video</div>
          <div className='flex flex-col justify-center items-center ctr ctr-presence'></div>
          <div className='flex flex-row ctr items-center ctr-toolbar'>
            <div className='flex flex-row basis-1/2 items-center justify-center'>
              <label>Base Language</label>
              <span>English</span>
            </div>
            <div className='flex flex-row basis-1/2 items-center justify-center'>
              <label>Language</label>
              <span>Spanish, Latin America (es-419)</span>
            </div>
          </div>
          <div className='flex flex-row ctr ctr-editor'>
            <div className='flex flex-col basis-1/2 col-editor'>
              <div className='inner mx-20'>

                <div className='item-editor item-editor-1'>
                  <div className='timestamp'>00:00:07</div>
                  <CKEditor
                    editor={Editor}
                    data={Config.data.english.first}
                    config={{
                      cloudServices: {
                        tokenUrl: Config.settings.tokenUrl,
                        webSocketUrl: Config.settings.webSocketUrl
                      },
                      collaboration: {
                        channelId: Config.settings.channelId + 1
                      },
                      presenceList: {
                        container: document.querySelector('.ctr-presence')
                      },
                      revisionHistory: {
                        editorContainer: document.querySelector('.item-editor-1'),
                        viewerContainer: document.querySelector('.revision-viewer-container'),
                        viewerEditorElement: document.querySelector('.revision-viewer-editor'),
                        viewerSidebarContainer: document.querySelector('.revision-viewer-sidebar')
                      }
                    }}
                    onReady={(editor: any) => {
                      console.log('Editor is ready to use!', editor);
                    }}
                    onChange={(event: any, editor: { getData: () => any; }) => {
                      const data = editor.getData();
                      console.log({ event, editor, data });
                    }}
                    onBlur={(event: any, editor: any) => {
                      console.log('Blur.', editor);
                    }}
                    onFocus={(event: any, editor: any) => {
                      console.log('Focus.', editor);
                    }}
                  />
                </div>

                <div className='item-editor'>
                  <div className='timestamp'>00:00:23</div>
                  <CKEditor
                    editor={Editor}
                    data={Config.data.english.second}
                    config={{
                      cloudServices: {
                        tokenUrl: Config.settings.tokenUrl,
                        webSocketUrl: Config.settings.webSocketUrl
                      },
                      collaboration: {
                        channelId: Config.settings.channelId + 2
                      },
                      presenceList: {
                        container: document.querySelector('.ctr-presence')
                      },
                      revisionHistory: {
                        editorContainer: document.querySelector('.item-editor-1'),
                        viewerContainer: document.querySelector('.revision-viewer-container'),
                        viewerEditorElement: document.querySelector('.revision-viewer-editor'),
                        viewerSidebarContainer: document.querySelector('.revision-viewer-sidebar')
                      }
                    }}
                  />
                </div>

                <div className='item-editor'>
                  <div className='timestamp'>00:00:36</div>
                  <CKEditor
                    editor={Editor}
                    data={Config.data.english.third}
                    config={{
                      cloudServices: {
                        tokenUrl: Config.settings.tokenUrl,
                        webSocketUrl: Config.settings.webSocketUrl
                      },
                      collaboration: {
                        channelId: Config.settings.channelId + 3
                      },
                      presenceList: {
                        container: document.querySelector('.ctr-presence')
                      },
                      revisionHistory: {
                        editorContainer: document.querySelector('.item-editor-1'),
                        viewerContainer: document.querySelector('.revision-viewer-container'),
                        viewerEditorElement: document.querySelector('.revision-viewer-editor'),
                        viewerSidebarContainer: document.querySelector('.revision-viewer-sidebar')
                      }
                    }}
                  />
                </div>

                <div className='item-editor'>
                  <div className='timestamp'>00:00:43</div>
                  <CKEditor
                    editor={Editor}
                    data={Config.data.english.fourth}
                    config={{
                      cloudServices: {
                        tokenUrl: Config.settings.tokenUrl,
                        webSocketUrl: Config.settings.webSocketUrl
                      },
                      collaboration: {
                        channelId: Config.settings.channelId + 4
                      },
                      presenceList: {
                        container: document.querySelector('.ctr-presence')
                      },
                      revisionHistory: {
                        editorContainer: document.querySelector('.item-editor-1'),
                        viewerContainer: document.querySelector('.revision-viewer-container'),
                        viewerEditorElement: document.querySelector('.revision-viewer-editor'),
                        viewerSidebarContainer: document.querySelector('.revision-viewer-sidebar')
                      }
                    }}
                  />
                </div>

              </div>
            </div>
            <div className='flex flex-col basis-1/2 col-editor'>
              <div className='inner mx-20'>

                <div className='item-editor'>
                  <div className='timestamp'>00:00:07</div>
                  <CKEditor
                    editor={Editor}
                    data={Config.data.spanish.first}
                    config={{
                      cloudServices: {
                        tokenUrl: Config.settings.tokenUrl,
                        webSocketUrl: Config.settings.webSocketUrl
                      },
                      collaboration: {
                        channelId: Config.settings.channelId + 5
                      },
                      presenceList: {
                        container: document.querySelector('.ctr-presence')
                      },
                      revisionHistory: {
                        editorContainer: document.querySelector('.item-editor-1'),
                        viewerContainer: document.querySelector('.revision-viewer-container'),
                        viewerEditorElement: document.querySelector('.revision-viewer-editor'),
                        viewerSidebarContainer: document.querySelector('.revision-viewer-sidebar')
                      }
                    }}
                  />
                </div>

                <div className='item-editor'>
                  <div className='timestamp'>00:00:23</div>
                  <CKEditor
                    editor={Editor}
                    data={Config.data.spanish.second}
                    config={{
                      cloudServices: {
                        tokenUrl: Config.settings.tokenUrl,
                        webSocketUrl: Config.settings.webSocketUrl
                      },
                      collaboration: {
                        channelId: Config.settings.channelId + 6
                      },
                      presenceList: {
                        container: document.querySelector('.ctr-presence')
                      },
                      revisionHistory: {
                        editorContainer: document.querySelector('.item-editor-1'),
                        viewerContainer: document.querySelector('.revision-viewer-container'),
                        viewerEditorElement: document.querySelector('.revision-viewer-editor'),
                        viewerSidebarContainer: document.querySelector('.revision-viewer-sidebar')
                      }
                    }}
                  />
                </div>

                <div className='item-editor'>
                  <div className='timestamp'>00:00:36</div>
                  <CKEditor
                    editor={Editor}
                    data={Config.data.spanish.third}
                    config={{
                      cloudServices: {
                        tokenUrl: Config.settings.tokenUrl,
                        webSocketUrl: Config.settings.webSocketUrl
                      },
                      collaboration: {
                        channelId: Config.settings.channelId + 7
                      },
                      presenceList: {
                        container: document.querySelector('.ctr-presence')
                      },
                      revisionHistory: {
                        editorContainer: document.querySelector('.item-editor-1'),
                        viewerContainer: document.querySelector('.revision-viewer-container'),
                        viewerEditorElement: document.querySelector('.revision-viewer-editor'),
                        viewerSidebarContainer: document.querySelector('.revision-viewer-sidebar')
                      }
                    }}
                  />
                </div>

                <div className='item-editor'>
                  <div className='timestamp'>00:00:43</div>
                  <CKEditor
                    editor={Editor}
                    data={Config.data.spanish.fourth}
                    config={{
                      cloudServices: {
                        tokenUrl: Config.settings.tokenUrl,
                        webSocketUrl: Config.settings.webSocketUrl
                      },
                      collaboration: {
                        channelId: Config.settings.channelId + 8
                      },
                      presenceList: {
                        container: document.querySelector('.ctr-presence')
                      },
                      revisionHistory: {
                        editorContainer: document.querySelector('.item-editor-1'),
                        viewerContainer: document.querySelector('.revision-viewer-container'),
                        viewerEditorElement: document.querySelector('.revision-viewer-editor'),
                        viewerSidebarContainer: document.querySelector('.revision-viewer-sidebar')
                      }
                    }}
                  />
                </div>

              </div>
            </div>

            <div className="revision-viewer-container">
              <div className="editor-container">
                <div className="revision-viewer-editor"></div>
                <div className="revision-viewer-sidebar"></div>
              </div>
            </div>

          </div>
        </div>
      </>
    )
  }
}

export default App
