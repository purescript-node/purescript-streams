export function setEncodingImpl(s) {
  return enc => () => {
    s.setEncoding(enc);
  };
}

export const readChunkImpl = (useBuffer, useString, chunk) => {
  if (chunk instanceof Buffer) {
    return useBuffer(chunk);
  } else if (typeof chunk === "string") {
    return useString(chunk);
  } else {
    throw new Error(
      "Node.Stream.readChunkImpl: Unrecognised " +
        "chunk type; expected String or Buffer, got: " +
        chunk
    );
  }
};

export function resume(s) {
  return () => {
    s.resume();
  };
}

export function pause(s) {
  return () => {
    s.pause();
  };
}

export function isPaused(s) {
  return () => s.isPaused();
}

export function pipe(r) {
  return w => () => r.pipe(w);
}

export function unpipe(r) {
  return w => () => r.unpipe(w);
}

export function unpipeAll(r) {
  return () => r.unpipe();
}

export const readImpl = (r) => r.read();

export const readSizeImpl = (r, size) => r.read(size);

export function writeImpl(w) {
  return chunk => done => () => w.write(chunk, null, done);
}

export function writeStringImpl(w) {
  return enc => s => done => () => w.write(s, enc, done);
}

export function cork(w) {
  return () => w.cork();
}

export function uncork(w) {
  return () => w.uncork();
}

export function setDefaultEncodingImpl(w) {
  return enc => () => {
    w.setDefaultEncoding(enc);
  };
}

export function endImpl(w) {
  return done => () => {
    w.end(null, null, done);
  };
}

export function destroy(strm) {
  return () => {
    strm.destroy(null);
  };
}

export function destroyWithError(strm) {
  return e => () => {
    strm.destroy(e);
  };
}
