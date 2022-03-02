import { Container, FileInfo, Preview } from './styles'
import { CircularProgressbar } from 'react-circular-progressbar'
import { MdCheckCircle, MdError, MdLink } from 'react-icons/md'  

const FileList = () => (
	<Container>
		<li>
			<FileInfo>
				<Preview src="https://sistemaupload.s3.amazonaws.com/e01a6fde92cd10e19449a94c37c44e87-profile.jpg" />
				<div>
					<strong>profile.png</strong>
					<span>64kb <button onClick={() => {}}>Excluir</button></span>
				</div>
			</FileInfo>

			<div>
				<CircularProgressbar
					styles={{
						root: { width: 24 },
						path: { stroke: '#7159c1' }
					}}
					strokeWidth={10}
 					value={60}
				/>
				<a 
					href='https://sistemaupload.s3.amazonaws.com/e01a6fde92cd10e19449a94c37c44e87-profile.jpg'
					target="_blank"
					rel='noopener noreferrer'
				>
					<MdLink style={{ marginRight: 8 }} size={24} color="#222" />
				</a>

				<MdCheckCircle size={24} color="#78e5d5" />
				<MdError size={24} color="#e57878" />
			</div>
		</li>
	</Container>
)

export default FileList