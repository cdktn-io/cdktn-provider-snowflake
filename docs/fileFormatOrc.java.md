# `fileFormatOrc` Submodule <a name="`fileFormatOrc` Submodule" id="@cdktn/provider-snowflake.fileFormatOrc"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FileFormatOrc <a name="FileFormatOrc" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_orc snowflake_file_format_orc}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.Initializer"></a>

```java
import io.cdktn.providers.snowflake.file_format_orc.FileFormatOrc;

FileFormatOrc.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .database(java.lang.String)
    .name(java.lang.String)
    .schema(java.lang.String)
//  .comment(java.lang.String)
//  .id(java.lang.String)
//  .nullIf(java.util.List<java.lang.String>)
//  .replaceInvalidCharacters(java.lang.String)
//  .timeouts(FileFormatOrcTimeouts)
//  .trimSpace(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.Initializer.parameter.database">database</a></code> | <code>java.lang.String</code> | The database in which to create the file format. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Specifies the identifier for the file format; |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.Initializer.parameter.schema">schema</a></code> | <code>java.lang.String</code> | The schema in which to create the file format. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.Initializer.parameter.comment">comment</a></code> | <code>java.lang.String</code> | Specifies a comment for the file format. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_orc#id FileFormatOrc#id}. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.Initializer.parameter.nullIf">nullIf</a></code> | <code>java.util.List<java.lang.String></code> | String used to convert to and from SQL NULL. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.Initializer.parameter.replaceInvalidCharacters">replaceInvalidCharacters</a></code> | <code>java.lang.String</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcTimeouts">FileFormatOrcTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.Initializer.parameter.trimSpace">trimSpace</a></code> | <code>java.lang.String</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to remove white space from fields. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.Initializer.parameter.database"></a>

- *Type:* java.lang.String

The database in which to create the file format.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_orc#database FileFormatOrc#database}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Specifies the identifier for the file format;

must be unique for the database and schema in which the file format is created. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_orc#name FileFormatOrc#name}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.Initializer.parameter.schema"></a>

- *Type:* java.lang.String

The schema in which to create the file format.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_orc#schema FileFormatOrc#schema}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.Initializer.parameter.comment"></a>

- *Type:* java.lang.String

Specifies a comment for the file format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_orc#comment FileFormatOrc#comment}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_orc#id FileFormatOrc#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `nullIf`<sup>Optional</sup> <a name="nullIf" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.Initializer.parameter.nullIf"></a>

- *Type:* java.util.List<java.lang.String>

String used to convert to and from SQL NULL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_orc#null_if FileFormatOrc#null_if}

---

##### `replaceInvalidCharacters`<sup>Optional</sup> <a name="replaceInvalidCharacters" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.Initializer.parameter.replaceInvalidCharacters"></a>

- *Type:* java.lang.String

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_orc#replace_invalid_characters FileFormatOrc#replace_invalid_characters}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcTimeouts">FileFormatOrcTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_orc#timeouts FileFormatOrc#timeouts}

---

##### `trimSpace`<sup>Optional</sup> <a name="trimSpace" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.Initializer.parameter.trimSpace"></a>

- *Type:* java.lang.String

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to remove white space from fields.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_orc#trim_space FileFormatOrc#trim_space}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.resetNullIf">resetNullIf</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.resetReplaceInvalidCharacters">resetReplaceInvalidCharacters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.resetTrimSpace">resetTrimSpace</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.putTimeouts"></a>

```java
public void putTimeouts(FileFormatOrcTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcTimeouts">FileFormatOrcTimeouts</a>

---

##### `resetComment` <a name="resetComment" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.resetComment"></a>

```java
public void resetComment()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.resetId"></a>

```java
public void resetId()
```

##### `resetNullIf` <a name="resetNullIf" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.resetNullIf"></a>

```java
public void resetNullIf()
```

##### `resetReplaceInvalidCharacters` <a name="resetReplaceInvalidCharacters" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.resetReplaceInvalidCharacters"></a>

```java
public void resetReplaceInvalidCharacters()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetTrimSpace` <a name="resetTrimSpace" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.resetTrimSpace"></a>

```java
public void resetTrimSpace()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a FileFormatOrc resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.isConstruct"></a>

```java
import io.cdktn.providers.snowflake.file_format_orc.FileFormatOrc;

FileFormatOrc.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.isTerraformElement"></a>

```java
import io.cdktn.providers.snowflake.file_format_orc.FileFormatOrc;

FileFormatOrc.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.isTerraformResource"></a>

```java
import io.cdktn.providers.snowflake.file_format_orc.FileFormatOrc;

FileFormatOrc.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.generateConfigForImport"></a>

```java
import io.cdktn.providers.snowflake.file_format_orc.FileFormatOrc;

FileFormatOrc.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),FileFormatOrc.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a FileFormatOrc resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the FileFormatOrc to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing FileFormatOrc that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_orc#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the FileFormatOrc to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.property.describeOutput">describeOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcDescribeOutputList">FileFormatOrcDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.property.fullyQualifiedName">fullyQualifiedName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.property.showOutput">showOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcShowOutputList">FileFormatOrcShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcTimeoutsOutputReference">FileFormatOrcTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.property.commentInput">commentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.property.databaseInput">databaseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.property.nullIfInput">nullIfInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.property.replaceInvalidCharactersInput">replaceInvalidCharactersInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.property.schemaInput">schemaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcTimeouts">FileFormatOrcTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.property.trimSpaceInput">trimSpaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.property.database">database</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.property.nullIf">nullIf</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.property.replaceInvalidCharacters">replaceInvalidCharacters</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.property.schema">schema</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.property.trimSpace">trimSpace</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `describeOutput`<sup>Required</sup> <a name="describeOutput" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.property.describeOutput"></a>

```java
public FileFormatOrcDescribeOutputList getDescribeOutput();
```

- *Type:* <a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcDescribeOutputList">FileFormatOrcDescribeOutputList</a>

---

##### `fullyQualifiedName`<sup>Required</sup> <a name="fullyQualifiedName" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.property.fullyQualifiedName"></a>

```java
public java.lang.String getFullyQualifiedName();
```

- *Type:* java.lang.String

---

##### `showOutput`<sup>Required</sup> <a name="showOutput" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.property.showOutput"></a>

```java
public FileFormatOrcShowOutputList getShowOutput();
```

- *Type:* <a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcShowOutputList">FileFormatOrcShowOutputList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.property.timeouts"></a>

```java
public FileFormatOrcTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcTimeoutsOutputReference">FileFormatOrcTimeoutsOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.property.commentInput"></a>

```java
public java.lang.String getCommentInput();
```

- *Type:* java.lang.String

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.property.databaseInput"></a>

```java
public java.lang.String getDatabaseInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `nullIfInput`<sup>Optional</sup> <a name="nullIfInput" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.property.nullIfInput"></a>

```java
public java.util.List<java.lang.String> getNullIfInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `replaceInvalidCharactersInput`<sup>Optional</sup> <a name="replaceInvalidCharactersInput" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.property.replaceInvalidCharactersInput"></a>

```java
public java.lang.String getReplaceInvalidCharactersInput();
```

- *Type:* java.lang.String

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.property.schemaInput"></a>

```java
public java.lang.String getSchemaInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.property.timeoutsInput"></a>

```java
public IResolvable|FileFormatOrcTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcTimeouts">FileFormatOrcTimeouts</a>

---

##### `trimSpaceInput`<sup>Optional</sup> <a name="trimSpaceInput" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.property.trimSpaceInput"></a>

```java
public java.lang.String getTrimSpaceInput();
```

- *Type:* java.lang.String

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `nullIf`<sup>Required</sup> <a name="nullIf" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.property.nullIf"></a>

```java
public java.util.List<java.lang.String> getNullIf();
```

- *Type:* java.util.List<java.lang.String>

---

##### `replaceInvalidCharacters`<sup>Required</sup> <a name="replaceInvalidCharacters" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.property.replaceInvalidCharacters"></a>

```java
public java.lang.String getReplaceInvalidCharacters();
```

- *Type:* java.lang.String

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.property.schema"></a>

```java
public java.lang.String getSchema();
```

- *Type:* java.lang.String

---

##### `trimSpace`<sup>Required</sup> <a name="trimSpace" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.property.trimSpace"></a>

```java
public java.lang.String getTrimSpace();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrc.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### FileFormatOrcConfig <a name="FileFormatOrcConfig" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcConfig.Initializer"></a>

```java
import io.cdktn.providers.snowflake.file_format_orc.FileFormatOrcConfig;

FileFormatOrcConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .database(java.lang.String)
    .name(java.lang.String)
    .schema(java.lang.String)
//  .comment(java.lang.String)
//  .id(java.lang.String)
//  .nullIf(java.util.List<java.lang.String>)
//  .replaceInvalidCharacters(java.lang.String)
//  .timeouts(FileFormatOrcTimeouts)
//  .trimSpace(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcConfig.property.database">database</a></code> | <code>java.lang.String</code> | The database in which to create the file format. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcConfig.property.name">name</a></code> | <code>java.lang.String</code> | Specifies the identifier for the file format; |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcConfig.property.schema">schema</a></code> | <code>java.lang.String</code> | The schema in which to create the file format. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcConfig.property.comment">comment</a></code> | <code>java.lang.String</code> | Specifies a comment for the file format. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_orc#id FileFormatOrc#id}. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcConfig.property.nullIf">nullIf</a></code> | <code>java.util.List<java.lang.String></code> | String used to convert to and from SQL NULL. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcConfig.property.replaceInvalidCharacters">replaceInvalidCharacters</a></code> | <code>java.lang.String</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcTimeouts">FileFormatOrcTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcConfig.property.trimSpace">trimSpace</a></code> | <code>java.lang.String</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to remove white space from fields. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcConfig.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

The database in which to create the file format.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_orc#database FileFormatOrc#database}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Specifies the identifier for the file format;

must be unique for the database and schema in which the file format is created. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_orc#name FileFormatOrc#name}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcConfig.property.schema"></a>

```java
public java.lang.String getSchema();
```

- *Type:* java.lang.String

The schema in which to create the file format.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_orc#schema FileFormatOrc#schema}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcConfig.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

Specifies a comment for the file format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_orc#comment FileFormatOrc#comment}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_orc#id FileFormatOrc#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `nullIf`<sup>Optional</sup> <a name="nullIf" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcConfig.property.nullIf"></a>

```java
public java.util.List<java.lang.String> getNullIf();
```

- *Type:* java.util.List<java.lang.String>

String used to convert to and from SQL NULL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_orc#null_if FileFormatOrc#null_if}

---

##### `replaceInvalidCharacters`<sup>Optional</sup> <a name="replaceInvalidCharacters" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcConfig.property.replaceInvalidCharacters"></a>

```java
public java.lang.String getReplaceInvalidCharacters();
```

- *Type:* java.lang.String

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_orc#replace_invalid_characters FileFormatOrc#replace_invalid_characters}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcConfig.property.timeouts"></a>

```java
public FileFormatOrcTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcTimeouts">FileFormatOrcTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_orc#timeouts FileFormatOrc#timeouts}

---

##### `trimSpace`<sup>Optional</sup> <a name="trimSpace" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcConfig.property.trimSpace"></a>

```java
public java.lang.String getTrimSpace();
```

- *Type:* java.lang.String

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Boolean that specifies whether to remove white space from fields.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_orc#trim_space FileFormatOrc#trim_space}

---

### FileFormatOrcDescribeOutput <a name="FileFormatOrcDescribeOutput" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcDescribeOutput.Initializer"></a>

```java
import io.cdktn.providers.snowflake.file_format_orc.FileFormatOrcDescribeOutput;

FileFormatOrcDescribeOutput.builder()
    .build();
```


### FileFormatOrcShowOutput <a name="FileFormatOrcShowOutput" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcShowOutput.Initializer"></a>

```java
import io.cdktn.providers.snowflake.file_format_orc.FileFormatOrcShowOutput;

FileFormatOrcShowOutput.builder()
    .build();
```


### FileFormatOrcTimeouts <a name="FileFormatOrcTimeouts" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcTimeouts.Initializer"></a>

```java
import io.cdktn.providers.snowflake.file_format_orc.FileFormatOrcTimeouts;

FileFormatOrcTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_orc#create FileFormatOrc#create}. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_orc#delete FileFormatOrc#delete}. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_orc#read FileFormatOrc#read}. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_orc#update FileFormatOrc#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_orc#create FileFormatOrc#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_orc#delete FileFormatOrc#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_orc#read FileFormatOrc#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/file_format_orc#update FileFormatOrc#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FileFormatOrcDescribeOutputList <a name="FileFormatOrcDescribeOutputList" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcDescribeOutputList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.file_format_orc.FileFormatOrcDescribeOutputList;

new FileFormatOrcDescribeOutputList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcDescribeOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcDescribeOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcDescribeOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcDescribeOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcDescribeOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcDescribeOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcDescribeOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcDescribeOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcDescribeOutputList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcDescribeOutputList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcDescribeOutputList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcDescribeOutputList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcDescribeOutputList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcDescribeOutputList.get"></a>

```java
public FileFormatOrcDescribeOutputOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcDescribeOutputList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcDescribeOutputList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcDescribeOutputList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcDescribeOutputList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcDescribeOutputList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### FileFormatOrcDescribeOutputOutputReference <a name="FileFormatOrcDescribeOutputOutputReference" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcDescribeOutputOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.file_format_orc.FileFormatOrcDescribeOutputOutputReference;

new FileFormatOrcDescribeOutputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcDescribeOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcDescribeOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcDescribeOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcDescribeOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcDescribeOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcDescribeOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcDescribeOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcDescribeOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcDescribeOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcDescribeOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcDescribeOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcDescribeOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcDescribeOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcDescribeOutputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcDescribeOutputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcDescribeOutputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcDescribeOutputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcDescribeOutputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcDescribeOutputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcDescribeOutputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcDescribeOutputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcDescribeOutputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcDescribeOutputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcDescribeOutputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcDescribeOutputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcDescribeOutputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcDescribeOutputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcDescribeOutputOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcDescribeOutputOutputReference.property.nullIf">nullIf</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcDescribeOutputOutputReference.property.replaceInvalidCharacters">replaceInvalidCharacters</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcDescribeOutputOutputReference.property.trimSpace">trimSpace</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcDescribeOutputOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcDescribeOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcDescribeOutput">FileFormatOrcDescribeOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcDescribeOutputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcDescribeOutputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcDescribeOutputOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `nullIf`<sup>Required</sup> <a name="nullIf" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcDescribeOutputOutputReference.property.nullIf"></a>

```java
public java.util.List<java.lang.String> getNullIf();
```

- *Type:* java.util.List<java.lang.String>

---

##### `replaceInvalidCharacters`<sup>Required</sup> <a name="replaceInvalidCharacters" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcDescribeOutputOutputReference.property.replaceInvalidCharacters"></a>

```java
public IResolvable getReplaceInvalidCharacters();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `trimSpace`<sup>Required</sup> <a name="trimSpace" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcDescribeOutputOutputReference.property.trimSpace"></a>

```java
public IResolvable getTrimSpace();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcDescribeOutputOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcDescribeOutputOutputReference.property.internalValue"></a>

```java
public FileFormatOrcDescribeOutput getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcDescribeOutput">FileFormatOrcDescribeOutput</a>

---


### FileFormatOrcShowOutputList <a name="FileFormatOrcShowOutputList" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcShowOutputList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.file_format_orc.FileFormatOrcShowOutputList;

new FileFormatOrcShowOutputList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcShowOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcShowOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcShowOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcShowOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcShowOutputList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcShowOutputList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcShowOutputList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcShowOutputList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcShowOutputList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcShowOutputList.get"></a>

```java
public FileFormatOrcShowOutputOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcShowOutputList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcShowOutputList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcShowOutputList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcShowOutputList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcShowOutputList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### FileFormatOrcShowOutputOutputReference <a name="FileFormatOrcShowOutputOutputReference" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcShowOutputOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.file_format_orc.FileFormatOrcShowOutputOutputReference;

new FileFormatOrcShowOutputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcShowOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcShowOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcShowOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcShowOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcShowOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcShowOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcShowOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcShowOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcShowOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcShowOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcShowOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcShowOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcShowOutputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcShowOutputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcShowOutputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcShowOutputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcShowOutputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcShowOutputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcShowOutputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcShowOutputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcShowOutputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcShowOutputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcShowOutputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcShowOutputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcShowOutputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcShowOutputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcShowOutputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcShowOutputOutputReference.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcShowOutputOutputReference.property.createdOn">createdOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcShowOutputOutputReference.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcShowOutputOutputReference.property.formatOptions">formatOptions</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcShowOutputOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcShowOutputOutputReference.property.owner">owner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcShowOutputOutputReference.property.ownerRoleType">ownerRoleType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcShowOutputOutputReference.property.schemaName">schemaName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcShowOutputOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcShowOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcShowOutput">FileFormatOrcShowOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcShowOutputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcShowOutputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcShowOutputOutputReference.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcShowOutputOutputReference.property.createdOn"></a>

```java
public java.lang.String getCreatedOn();
```

- *Type:* java.lang.String

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcShowOutputOutputReference.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

---

##### `formatOptions`<sup>Required</sup> <a name="formatOptions" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcShowOutputOutputReference.property.formatOptions"></a>

```java
public java.lang.String getFormatOptions();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcShowOutputOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcShowOutputOutputReference.property.owner"></a>

```java
public java.lang.String getOwner();
```

- *Type:* java.lang.String

---

##### `ownerRoleType`<sup>Required</sup> <a name="ownerRoleType" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcShowOutputOutputReference.property.ownerRoleType"></a>

```java
public java.lang.String getOwnerRoleType();
```

- *Type:* java.lang.String

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcShowOutputOutputReference.property.schemaName"></a>

```java
public java.lang.String getSchemaName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcShowOutputOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcShowOutputOutputReference.property.internalValue"></a>

```java
public FileFormatOrcShowOutput getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcShowOutput">FileFormatOrcShowOutput</a>

---


### FileFormatOrcTimeoutsOutputReference <a name="FileFormatOrcTimeoutsOutputReference" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.file_format_orc.FileFormatOrcTimeoutsOutputReference;

new FileFormatOrcTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcTimeouts">FileFormatOrcTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|FileFormatOrcTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-snowflake.fileFormatOrc.FileFormatOrcTimeouts">FileFormatOrcTimeouts</a>

---



