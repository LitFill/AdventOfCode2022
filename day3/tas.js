const listBarangPerTas = [
    "GGVGlqWFgVfFqqVZGFlblJPMsDbbMrDMpDsJRn",
    "LwzHtwdLHHwDrzPZzzsJbJ",
    "wdLTBvSvHvZVGCjhfN",
    "HsSSnZVHjjssZnJpSJjBHHWgQGcgqqQLQdQFqNgWgqGNDg",
    "rmmRwrtfThtTrbCrGGGcLBDTqDBNQLdL",
    "mwPrrbzPfwvbzhwMMnnjHnBjZlnzMM",
    "gjjdMBgdqdTpJpBcjgRRRlqnvrqfnZtrtZDw",
    "zHShWLhCszCWHVbVzQWCPtQvNZRwtfftfNnrnftlfR",
    "PzPSssHbVhCLFMJFcMFJJMjdJw",
    "ZqJdtpfpjmpJjpnwWdttTCDLLTQFNTzTzrcqrQqc",
    "MsSlBGvBsSGGSlbGsCgggNTgzNLczFQNrNQVQcFzFF",
    "sGHHSGllhvMGhSRGCjtjtjnjnnmHWpWWtJ",
    "tMdjQlHPHsGjsCtsCpwwqfhfnnFMDMrpfD",
    "SbNvWvBRJRWwFSgppgSrfg",
    "RNcNbvzJRcVLRVzTRFLjdHCQttdZdPlHstPl",
    "QWqgpdBflpHNCNWNHHPm",
    "VVMbbJsLFVMhrMJMmRjFNHwHjjCTGSSRFj",
    "mbMsZzsLmVhJZrcLcJhLMtnqvBnZdggplDffvlnlvnDn",
    "prnNnsFnZpnBNdNtFrNnzNQQwTTQZqTHTQJQMwHDMDlZ",
    "jgfgcSmbLmhmcPShghRdmwJTQjTlqGlJQJHqQqGHqQ",
    "hRVhPfbCgbVggLVRSSmRhRPhrrrnCzzsvCvrnvFnNppsvBtd",
    "QJLNDWSWQdLFFFhLdt",
    "npHhHMsfsjpZjznRtmrMCdBwFBFrBdmt",
    "HsjHqRRfnnHRsgfHffZspgzqDGQSWbQTDNGhQhSqNPhDWWbT",
    "bsCmFDsGZCNsDmLDLZBSHSJTHnrZQMQSSQ",
    "jqRpwvfqnnRQrftdBMHddB",
    "phpchwpzjpvwRzwcsnlFsssPCCGzDlsD",
    "rMqzVQfrfVZWZhTdRTQL",
    "cgmtFtjFFJDDtFvSFRZdLlhpHZddmwTZWh",
    "FbcSTtctcvFTJNgtJDGNPnCqMPMfMBfznGVsrMCq",
    "wLJfGJJPZLBfwSLGHbqmhhDHHhFDzfhv",
    "FsnpFjVjplTQCspNlCDbzhMMbqvMvsgmHDqb",
    "lRdlTdTddllpRQFRltVVdFRcwrtrcWWcPrrWPrPSrZWLPc",
    "VGVZhTppGTfPnJVJrFqbsmbSSshHqWqRHF",
    "llzDCzlBLdNcCddlMMNBdCCtWHbFqFRRRsHjWtRwSWqbmjWm",
    "NbcMBBvzzMQLCDBVTQQPVrPQPPZVPp",
    "cdcgfmQdqlqhzzPjzfwpwf",
    "GLBGBDvbvRzGwtnnmPpp",
    "ZRCZBRFSRvLRLFvvbLLFQdHMTHTlQlNqNmqFlWdH",
    "vzjzvHtcHvJcDStLLGSShCbbfF",
    "MWFFTVZRMmMgdQdSQLwQrQwbGw",
    "gFTmgmVZssRsWZRNzJlBHHnnJDvzNPlP",
    "rHrvHpmHZfdGDDGGZd",
    "cTlMsNhllMhGchNPCBlhMQgVDdgDSSWVbWVwRQwRSgbV",
    "lnBjnNNTTMnCTcChPNhMvtzvFGLtJrjFtHHHzHJm",
    "lgpdZZMmGVVzVZzt",
    "HfHLrHqbPbzJJzRJJPTl",
    "HsLWWbDqFrqlqfbsbDqDBncpgFmmvpnmmgpvdvjcdM",
    "GpNVbTpJJNvMBMVvJTGvhnWQQScllnhhWlhVSznV",
    "ZjswwHHLZzGnjWjSjl",
    "sHdftLLtgLfwdtPmHtMbNpMTpNqGRbPvTqPv",
    "sHSNNhNwsllGSGGlWSGWSsFrrVbQrdmFrVrrmnrHmrHr",
    "QQMRZDDRcrcnmRcV",
    "fJfCPMJCzTMZSGsWwsWBwqQf",
    "HwQZZJsHdqqsdJQGRgCgVGgSqgpcGG",
    "ljWWbnPhjBlGpCRCnScSGg",
    "hrrztWlbPjltjMPSdJDZSsHttwsZwD",
    "VzzbmzvpvNhvBDqc",
    "QHSJSQGCwJCGrGQjjcgcBFhdgqdqFdDNNw",
    "rCGJtZrHhhtLRsth",
    "TMWwCLPpMTThrvtMRJjbjRvmJs",
    "fDzcHFfSfFQfZzZRJbdmmqqssqtbSW",
    "WWgGZglcllgPBBCBNVGPNr",
    "wrwwhpTpbqhqrshrrfrFfwfzRJGdNJHNmcFzCCzCRJGzGR",
    "vMggvjQvgPvQjVLMMPSZqWNJGCzcNGdcdzHPPzcmCzPz",
    "qDZWvBZVfDhbTtrp",
    "LpDvHdjVghnjbGrn",
    "FBBBPwwlBlwSfFTWPHPWWhmgngmmnPnmbsngngbGrb",
    "FwftBSCSfWCtwfVQDvHHCMVvdQLQ",
    "ZrQpQlSpNlqQCVnQBmdDqmWDqmWWBDBB",
    "HsZMsJvZzLMHTRwWhgDwmfDBgdhWdf",
    "RZvTzJGzRjFrVNVjlQrS",
    "mqjMwfqlSSPmSrlPhwhVpGRcppWcpcGRcGWv",
    "ssJDJJNgZNDWrRWcRpvr",
    "ZTsTnnsLJQgPnfMwmnMrfm",
    "qsVBvZqWLdfbfvLj",
    "mPNRgmHBBGQrCbSbrdfCCSbC",
    "PlQTGcTTcgGFQQGPTGllpqMzwzpVJZwBMssZ",
    "FWGcNRLRLhwJJQfV",
    "nzbzlDBHSpTDbpDpzHwCqhqwJJghQqQMCCBw",
    "JnzndzpmJFmNsrrFsc",
    "gmRwwDwfnRDJgwZLFQFFNGNQrFBmFbbm",
    "CCVHVWWThSrjVGvbNj",
    "WpdqpplppHCWzlClMMTTZJcJsdscJLLdbDDfZDgL",
    "VNtCCMDllpBqDvtdCczTSgjHlzGSHSGZTZ",
    "hPFPsQhhFhLnbsRnLFssdzcHdsSHSSHgjzHG",
    "QPWPQrPPmbdnbWLFPrrBVrVDBqqNMVwttDtBvD",
    "PPNNRggwgRRgHBhDtwhTwbDs",
    "SFGSFSMCJFMrcrCMSSsbtrTbbZhBvtHhrTHD",
    "MFfSMpflQLQflfLjnLmddsLdddqq",
    "RcgbcrrFscVrwZVCgVGGmHppNNndWnGdNqddqqNqND",
    "jTlSTBSTjLTvlvjjPtvMLlhHnftphtDFNFqDnDHWNddn",
    "QBMQvzzjzvJPjFQMmwZJrgmCCJVRVbbc",
    "CzPJsWCpvsNszsJsNsHlDhMrrJGjhrRVhRGgDDjG",
    "tFFdbqFLFdwctQdfVhjRRghTcrjVRTDW",
    "bwQtFLdLBdFmwnHnWHPBNnHCnp",
    "CNTstGNslRRRstlmNmmTZZqfFwtqgwqgfBPSwSWwqgWq",
    "hpDbcHbpSrcgqqzhhWVfqg",
    "DDcLDjbMjCSsZRNlMv",
    "MhHMCMNbzbMHlcqmGmrmWc",
    "tnPggdZPBPgdtttJpdnwVBnmqQcvlQrQlfGqmfWffBcqWD",
    "VPPwPPLPwLGFGLzCbG",
    "rqBcBmjHTGfPbcVgPG",
    "dlDpsdshzlldlDvsWlWvLQbQBbfLFLbPvbBGQBgG",
    "BlBznnRWzlphphBnhZjZtNNCNmrNqjCqHwHN",
    "mQBvmvBmmLJvvrLtttQrfhGlcRGfRhVGWJVChlRG",
    "MzPswTsbTPPsNgMNszgzMpbMfcRcGflVGRfWSpFRlWWWFhcC",
    "bcPsTbgbbTTwNZzTZzvdjdjtQQndZvdrvdmZ",
    "hQzTQJFFZJrcdcdZFFrGFSVWVRWRwRgRHVMWDCDSWc",
    "lPmpNBnnnsNBnLnfbfnCDWMvwRvDCCMPwwHWvM",
    "HpjmffNlnqqhddTddFZjGJ",
    "BwsLFFbHLbVCSCSFbsbFLsJbqnTtZrRMHTZtrTrZTcRRRRTq",
    "lGhNhpPmmhpztZTBrcpjRqpB",
    "QPzdfzBQNgFJSCwsdLbS",
    "ZsZsSBTgffSCqSSfrMnnMwjqmqmnnnqwMm",
    "bbPPbzVclcPzGNlvzVtmnDBnQmtnQLBjJVLn",
    "zPFGplGGvdPbHplcbzzvdlNBTThgRpCTCTfhfsCCsSRZhR",
    "CVLSVCLVZRsHcnzSRpdZZRCdPlmcMWDDlPNqMqtDMmqPMlDt",
    "TBnGjfQrQJjhfWlPPmPQDNlmlP",
    "fjhhGvjvvrTTBhvTBTbvGVRLzVnbSRZpHddspHRzLs",
    "DDtWjfRfftWMLzSQjzzhWjjwRVPHqFbBbZHVwZBFvFwZvZ",
    "JGllgCJlJsrCGPrCNTPdslvZVVNVbvBqNbbpbbFHpBwZ",
    "CcPdnCdmCJjfcftWhtSL",
    "pgpfddDGHWzDNGNGpRCQjCTFHZZQFQjcRT",
    "bJlhqmMvnlrRQFtTthPVhZ",
    "lvbJrlJMBwfzGNTddB",
    "wpbJGGZpsjvtdWvGWF",
    "HqqhBhBqhhNQHTSHqqNzRHVPvTvddWrjtrjFvrvdTdVP",
    "NRLCRzlqHQtNRBLzQllhhZcgbggwmLDZpsgssDpwwD",
    "pDzFzJFcVMcWJFJFzpLBsqWLZssshsGLGbsS",
    "wqHqfvnfrRwQtdQRthhBbBbZLhPLnBTGsh",
    "CfQqlqvtfHNvMVmzmmMCFDMc",
    "GcgpNHvcSNvpSLphdhsLdQTsdWThhQ",
    "wwzttPrrhQswdhnT",
    "tjJjMJRbRbjztmjtjbgcRsNlgglHpDFSlSvg",
    "VVLvLqqPVlvcqLLdwLbHpzcHSsbRJppHbHpF",
    "CfjjCNGmMWhWjhWHWb",
    "ZmGZffggrDqZvZtlbTqL",
    "TTmmhvBvvHWzHpsPpstpLVdwwsLb",
    "qflfFgNctNcCnCCNDnfFFNDwrslwZbPswwZbJLJZbrlPLL",
    "FgQDDcncStCgtqccjSDTHWMThvhTQMBQhWvWRG",
    "SqhVghPccSBhgSBqWBFNQNsHQHMjCCQQWCwQHN",
    "fLZftnlttcbbtZbZlpZtttQjwsCQjRwwRDQspMRMNNQs",
    "TfLtvbJtZmlbTTTtlJbFvVqPSgBdPqPhFSGBcd",
    "pPPNDptcqtpcDztLDhhngnnJgJTmJwNnwm",
    "HVVCsSClHGBCHslWHbSCGGVngTrJwnnJnQRRBrhQhgJhdm",
    "WTWWWsvVlvGbWCFvjDftPpjqZLLtDz",
    "wWclwtDwRvflvffB",
    "sMMsGdsSTMrJZNqczfdvhvnzCnfv",
    "rspppMjMspSTSMpgLjcPFmwPLmPHwb",
    "tCdSMHtHtRFHdWSSJQSgrrrnghTNJN",
    "BGfcvDsfvsqcvqfGvfGnNLhggBNQJNJQmpgQJm",
    "sGfQDPDZzfDZzclwDzwsDlfjtbdHClFRCMWjbMFMRFWbdj",
    "pJNCcvqCccsVvFCpqsmvWJfCBWgSzBBRrrBRDDgDrSbbgQbQ",
    "TMLnLjjffwfwGdjQjDDBjBrDtztRSb",
    "MdPLGhHnMZhlPHHTFfZvVCpmmmcFcVFC",
    "SwFMfCMRCdQDdMbmdFfdbbnlcVncVCcgLqWcNNnCcWlW",
    "hPjQzzhGzhpPrtPJPpPHrVgnqVVncVVnNHlqVnncNB",
    "ptjGrptztpthtrtJJhTsGwFDZZDQmSdfZSwsRZSwfZ",
    "rSSWWCWrdllHWpjcnFNnRCNjQp",
    "bGwwJqGVGbGJVVhgbBgttGmBQjFsMjpMcMnnMBcQFNnsssvv",
    "bfthwmfJfgwwmmwZqVJPHNHSZHWzSlDPrdDdSH",
    "nmJccvclcbwmlbbvVbvsHwJJPCPNCNPnLBhrBPPLBhLhBgBP",
    "MdRGtdDRTqWDMqtMDtQDRWSdLLBsrhLgBCgrgCgNNLPBfNMf",
    "dRZQdDdRRSQWGsjZmwzjmlzsZH",
    "PBGGMrTQTrTBpPQpLpSlwjwfjtlnfwbmGttw",
    "fCsJCWJcvRCtwwjbCl",
    "NsqcsfcvDHFVDJvdLQTrpdTTzTPpHr",
    "rltrwsBTlrfGZggGBLGGNN",
    "jhMnRQJVphMnbhvQjDZNqqZDNTNHZVHGHq",
    "MRvbhQRQQChpvbjvMSvQnMcsFsfwwmlCwFwWcTWwrmPc",
    "DDvLLLBnvrzvbvbmtv",
    "TMwRjTRMGCwGGwrjQQnmrQrrQdhZ",
    "MJPFHFTwgCGqGqgJMGDfSWcsnBSccgVDlnpW",
    "flzVzNrdLNLJzrGlfdlzjrQDgFTpDgDmmmgFmqFDQjQh",
    "CbnBcsZnPZVSnwvVsZbRhhBDpgFphgmgDgTppq",
    "ZWnsWSnncSZsntZCbsswwJMzdLzlMdNMLtMVfrllMt",
    "ZffSgNfgJgGCHZcZrpHrNJTLhqvSLTqQnvVTLvzvLTjV",
    "tWFtHMwlBlDqjjzjnqvvlV",
    "DRMPDtWHPFDBFFwWMFBmFRPgZpJfsffNGJNrGcsprrsmfg",
    "wRZRmpZmlPqZjzGrdrGq",
    "bBhQQFPQbPDVNzVNzdGWNdrf",
    "QFbcDcDbLHgHBPDFRsSSMtmvRttMpCLS",
    "MpWJVVJMcWvpRShcwpLGflmqzSfNdfNLdQzN",
    "CDBTtCgtbjgCRrBrPBTQqzflNqjGdLzzmqffzq",
    "rFgnnBbttDTPtHCDPrPMnpwVJhJvMZvpMvppRZ",
    "sWTTmpsfsWppPTTsTVZWHVVZNvVcdcJvdN",
    "DjjBzjhRHvvvSzdc",
    "rMBjjrjbjrGDlgMlMrGjBgRLPTTwHMsfnFwFQPMPMnmFFm",
    "QRRbDjjmPzNQwFDNmrQmzCbVHrMhBVrJLJJfMGGLtfJBHh",
    "dsWcsqqWSWvnWnWcWGPJLBqhLBqGhBJHHH",
    "ZWnPWgWgPnlbCDDwmmDbRZ",
    "nfPqqfLqQnfHBSqnzztQjVmjfGRWJNGRWsJWJfmJ",
    "TTMlMMlFDMGVGRsVJH",
    "CbDbFDbvgTFFwgTDlDprhlPSqBzSnPdLPtPPHgznQqBQ",
    "fJmWVfHqjfjhZCQZ",
    "NcNzBNvgszQmzjnthZQC",
    "LsLsgBNFmFgTFgGBBgcdMdvPDPDJWrlpVbGpJWqHDlHJHD",
    "SllDdvzgdFDdlPJvbFDDSzFScPTRTNcwfZRwRhcwwNnRZTtf",
    "WBpWBCLGVpLjHrHGGVhZNwcTVcNhVnRcNZ",
    "LHLQLspHWQGpWCHnBvdzDJFlqvdsqgSgqS",
    "GcTctDMjMhpMDRjLsMMsfDWFfdPCFNbnCPnvCPgW",
    "JmvwqlBwnmfdFPFP",
    "SvZqHSZqqHZZZBlllBwSwsRsMHpLjpLsMGtsMspGRT",
    "ClLnCLfClLVllfLLcQjLBCfCmSHVsttsmtsVStDNVdppdsSp",
    "PFrRMbWqMRwFRqRSqwqvMvMsGtgsdmssrgNtdmpNdDGgdt",
    "bwJbPWPwFFPFSczCZzZZCcfjBJ",
    "MwmBmzwJQTcTmfPVfZPwhhwHPH",
    "jlnrglFLvbrGRFGnvFZdNNFfPZddPThVhdPH",
    "RjbjpgbnLGvpLgzBqBpmWmmzqTMS",
    "FnsSpttPnPbNCFDtsPnFHQZTQZgcwgDDTfrfTHMZ",
    "mRjzRzlvBvhjZrQmMMwfZZNN",
    "ldzddlzLRlRWdhjdRLjhRWtJbJbNtJJpJPbCbGCWNG",
    "wBwmNZBTmzzcVcmpzZqdMgPjnLSVlPgDPdbMdg",
    "flJvGtHffHDddddbHjnb",
    "RstrhfrhhRGFQtRhtftvQhvFZpsmpWwNlWqcWTccBNWswqNp",
    "DPWhbzDlQLLlQbLDlLhPhLFNNJqCFGqnNJCCSCnGPnGN",
    "wvwjtvtdwfssvSJgFFvGGSCFcp",
    "mtdrZwwJsrtddrHRtZWbVThLlBzVTzhHQWhB",
    "TsRRWctsTJMQZllggc",
    "zDvhpbprgGvpvVlVQlZpQMJVlQ",
    "rrrvFvGCDhDSrrrvChCgSstBNTSftWBjTdfWBN",
    "JJdssBcLVGrgbBHWrH",
    "QZTptvmvmlZpRDlMMMZCQvnjjFnrjWGFbjnrnFGWgZrz",
    "TMRplDMggtwlppTlvhsJJqdcqwVPSSNcLd",
    "JjTCCrcRvccPLmMP",
    "NfGFPZlNnwBfPlbbbQZGqLHgzLghSmMBzSgvzmDMhv",
    "ZfbnNQpQnZGlGlGpWTddjdTJdpRPTrCj",
    "gWLblMMggdWsdRJlblMRMMqWDvPvcPPPccJPJVTZVZThmcDP",
    "rQFfGfrCHrjnrtNTcPShTSPvvVLtmm",
    "fQrCfLrpLHnCHwslqzqsslswzqRW",
    "zpJtGlJPMPTlTjGJCDGCDljpdnvhhWnZnZnDwwmvnWDWWvdd",
    "sHrVrSrRRRLNgLVBqSsZmWwvwcvwZjmwngmdbn",
    "QsQQBrrLHTjPpTQzzP",
    "JDlzHHzzptRDmbTMrrVQ",
    "dRRNqnCBnmrQsVQQ",
    "wFPCBNFgwjPwhgFNztftpJRPpzRvvHtZ",
    "DlBhrDBPPwMWwhWchW",
    "ntSqbbSJFJNqzVzjCfMvfSlSRWccRL",
    "mVlHtNVtqldbJVmNHmdTTBBgrQQgGsPQdrDgsP",
    "HWHNbBgvNLdcvQMnSf",
    "wqqqVPDPhqwszFwrrszFfMdWthLcMdfhthSQfJSt",
    "qVPVwTzFwFDpDrPDzDPFDPlCHjBGjTmZGjbWWGZBRTNjjH",
    "GVgdWjllSqgjdgHqqlfmhwcpwCzhvZwMcScv",
    "nsJQbLRQsNnzQDQQPPBbRBRhfZwpZcvwpvvmLCcvpcmfMM",
    "DRJtnnRbBBnPztsrPzRBPbsFFHqqVrqggjFWqrgWjTGgFq",
    "hhZJQPJFHGGlcWWslpNN",
    "VwwwJjvwMtrCnwjDNDzlfscWszWW",
    "nVStCrMqbVwqVqSqwnLPhTJFdRgJHZSFRLTP",
    "vPgMbbRhhvMvNjjLWsWQsHQmHwBrmmBzww",
    "tFctDnVFpppHVBTdzdTQwl",
    "FtSFqSptfJCqqJStZCqDpDJMhvLLgLMgQgjgGZgGgMPLZg",
    "zwsWgSGWLSVhPWhtLgLWhPVNQTmDrDQttZpdQtdpQDDQZQ",
    "fjCHcvvjMDrppCQpVV",
    "VMqRnVJMVLPzbRWhGh",
    "mjRmzQlzDzNHWwDZ",
    "FBfJBGqnnpfSVGnpJbJVfNtCsJHWZvrsNJCZrCNsvN",
    "fZPBnfPqSBqdfpFbVnVSjgdcLLgRLjmgRhLLghlR",
    "FSFnTcppdQtnnDhtzDfg",
    "ZLGVmBLBVwZCVjjGqGhVwVVgzzbMDtNNvszMmMffNDDvtM",
    "VZPJjBZVqBZZBjqwVqllpSTphhQFPShWSQcW",
    "hTRdcLrCLgplLvBFGvlL",
    "nZDZqzbDbDzRZtVNDzDWGwslsllBFpnlpGvJssFG",
    "zbqjNWQVmVPrrRjRdRhS",
    "VpNCbVHlHHZfflVfmchctqFcqQQjZmZM",
    "WDSRGgsSvgJSRrnWgqQhmjBqmhqrtLqmQm",
    "znSGTgDJnsDGzgwCwlpbCNwHzVtl",
    "sTTTrpHFFFqTnQbbvfJdDzHHDLVV",
    "CjMtgMgRvbPfjjvB",
    "mhMvlhhWClvqshNTQQqsNN",
    "tWFtFBzbwdFrpmdhdm",
    "qTqDjJjJQQqMjTDLJjNqNqPNdmpcSmhdmhhmcrWZpdPGddcc",
    "RjNQLJNTTJDDJRHHjQqnMWtlvvVvbtBvRVzgzgwgVg",
    "CGdQjwdJrbBmpmZZZlRWcb",
    "NgtMPVstgSzBLzhgzgLgDRlcmDWRmlZvcSmDSvvp",
    "LhNsgPPLFPPsNzMhhVzPsGJBFqwQGfnqfQjdGdGfwr",
    "CNbNdbzjCZpPNzjmzjsCMRJvnnMRGnsvJGRs",
    "wrtdwTLWFcFWdFgwRRsnJGnGfTGJfMsq",
    "FttcwgBtgVLgPldQSNZBzBpz",
    "DjRZrrRmttRFDvDrFTZsnWnHVSTSSJVZJH",
    "dNNhLqlLLqdCzfMMlCfSncTVVWcHdcVsVdSVnT",
    "QqppMfzMfqWCwbRQrwFrrttQ",
    "dwGjHrtjsdhfCHnPSpfMfDPpPDWS",
    "lmNzzlLbFqcqNgzpWMSvbbvDQDGWDp",
    "LBmglgmqBqmrwCGhCjVtBC",
    "tvHgWZCCprlgpWglCtjPhLmPmhVdJFSzVzdJVmmQ",
    "fBnTTnNNBnwfnNqcBbBBTbGJQQJhSSdQJJsmdJFSQGSmVV",
    "cMcDwFbRfFRlHCRCZrrp",
    "ZFWmgghzBgwgjWBzjzmRWWMmsVwnVrsdVdwNrrpnnVrPCnCP",
    "GLLbtGqllctqvGJvSlQbJGsPnVdsdpsTPLsVppBCTVss",
    "tJBStGSvctvDDfczmRgRZjzDjZmgzH",
    "FMrLmsQQSWzCZBhpQJTQQZ",
    "dPPVncVvPBJDCPhwJD",
    "fvHbbVHvqnvvvBzgLbbGGmrbMr",
    "mrZzrzqDrhZqDddSFrCGLLLPQPQBJPJJBnQq",
    "TgbpGblWlMsjgWlgMfpNRgbRHHBnHHHtLpCJPCPBnBLJtQQL",
    "sbTlblTlvRbbGblbFcdDzccVcDVvzzzd",
    "zMzfzlGwSBMMSCMzhsPgfcPcfcbhjQPt",
    "FHHqJVdJmFmdVrJdJppthscjGtqRPRcccgcQbR",
    "rvNJJpLrvvLnJvNFFvZZZBWznBWGSDCMnCwz",
];

const panjangListBarangPerTas = listBarangPerTas.length;
const listBarangTasKiri = [];
const listBarangTasKanan = [];
const listBarangDuplikat = [];
const listNilaiPrioritas = [];
const listTasPerGrup = [];
const listLencana = [];
const listNilaiPrioritasLencana = [];

for (let i = 0; i < panjangListBarangPerTas; i++) {
    const jumlahBarang = listBarangPerTas[i].length;
    listBarangTasKiri.push(listBarangPerTas[i].slice(0, jumlahBarang / 2));
    listBarangTasKanan.push(listBarangPerTas[i].slice(jumlahBarang / 2));
}

const jumlahTas = Math.min(listBarangTasKanan.length, listBarangTasKiri.length);
for (let i = 0; i < jumlahTas; i++) {
    listBarangDuplikat.push(
        itemDuplikat(listBarangTasKiri[i], listBarangTasKanan[i])
    );
}

const panjangListBarangDuplikat = listBarangDuplikat.length;
for (let i = 0; i < panjangListBarangDuplikat; i++) {
    listNilaiPrioritas.push(angkaPrioritasDari(listBarangDuplikat[i]));
}

const jumlahNilaiPrioritas = jumlahArray(listNilaiPrioritas);
console.log(`jawaban part 1: ${jumlahNilaiPrioritas}`);

for (let i = 0; i < Math.ceil(panjangListBarangPerTas / 3); i++) {
    listTasPerGrup[i] = [];
}

for (let i = 0; i < panjangListBarangPerTas; i++) {
    const angkaGrup = Math.floor(i / 3);
    const angkaUrutan = i % 3;

    listTasPerGrup[angkaGrup][angkaUrutan] = listBarangPerTas[i];
}

const panjangListTasPerGrup = listTasPerGrup.length;
for (let i = 0; i < panjangListTasPerGrup; i++) {
    listLencana.push(
        itemDuplikat3(
            listTasPerGrup[i][0],
            listTasPerGrup[i][1],
            listTasPerGrup[i][2]
        )
    );
}

const panjangListLencana = listLencana.length;
for (let i = 0; i < panjangListLencana; i++) {
    listNilaiPrioritasLencana.push(angkaPrioritasDari(listLencana[i]));
}

const jumlahNilaiPrioritasLencana = jumlahArray(listNilaiPrioritasLencana);
console.log(`jawaban part 2: ${jumlahNilaiPrioritasLencana}`);

function itemDuplikat(string1, string2) {
    const charSet = new Set();

    for (let i = 0; i < string1.length; i++) {
        charSet.add(string1[i]);
    }

    for (let i = 0; i < string2.length; i++) {
        if (charSet.has(string2[i])) {
            return string2[i];
        }
    }

    return null;
}

function itemDuplikat3(string1, string2, string3) {
    const charSet = new Set();

    for (let i = 0; i < string1.length; i++) {
        charSet.add(string1[i]);
    }

    for (let i = 0; i < string2.length; i++) {
        charSet.add(string2[i]);
    }

    for (let i = 0; i < string3.length; i++) {
        if (charSet.has(string3[i])) {
            return string3[i];
        }
    }

    return null;
}

function angkaPrioritasDari(string) {
    if (string.toLowerCase() === string) {
        return string.charCodeAt(0) - 96;
    } else {
        return string.charCodeAt(0) - 38;
    }
}

function jumlahArray(array) {
    let jumlah = 0;
    const arrayLength = array.length;
    for (let i = 0; i < arrayLength; i++) {
        jumlah += array[i];
    }
    return jumlah;
}
