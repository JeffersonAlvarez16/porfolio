import Image from 'next/image';
import { contact, contactes } from '@/data/config';

export default function Stack() {
  return (
    <div>
      <div className="overflow-x-hidden w-full">
        <h2 className="landingSectionTitle max-w-max mx-0 text-left relative mb-4 md:w-max ">
          {contactes.title}
        </h2>
      </div>
      <p className='text-center'>
      Envíame un correo electrónico:{' '}
        <a
          className="dark:text-white text-black transition-colors duration-500"
          href={`mailto:${contactes.email}`}
        >
          {contactes.email}
        </a>
      </p>
      <div className="flex space-x-5 mt-5 text-lightText justify-center transition-colors duration-500">
        {contactes.github && (
          <a
            href={`https://github.com/${contactes.github}`}
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="/static/icons/github.svg"
              width={20}
              height={20}
              alt="Github icon"
            />
          </a>
        )}
        {contactes.dribbble && (
          <a
            href={`https://dribbble.com/${contactes.dribbble}`}
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="/static/icons/dribbble.svg"
              width={20}
              height={20}
              alt="Dribbble icon"
            />
          </a>
        )}
        {contactes.linkedin && (
          <a
            href={`https://linkedin.com/in/${contactes.linkedin}`}
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="/static/icons/linkedin.svg"
              width={20}
              height={20}
              alt="LinkedIn icon"
            />
          </a>
        )}
      </div>
    </div>
  );
}
