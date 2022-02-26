import Dropzone from 'react-dropzone'

import { DropContainer, UploadMessager } from './styles'

function Upload(){
	return (
		<Dropzone accept="image/*" onDropAccepted={() => {}}>
		  {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
			<DropContainer
			  {...getRootProps()}
			  isDragActive={isDragActive}
			  isDragReject={isDragReject}
			>
			  <input {...getInputProps()} />
			  Jogue seus arquivos aqui
			</DropContainer>
		  )}
		</Dropzone>
	  );
}

export default Upload;