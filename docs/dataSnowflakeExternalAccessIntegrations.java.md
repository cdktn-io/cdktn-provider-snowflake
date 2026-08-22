# `dataSnowflakeExternalAccessIntegrations` Submodule <a name="`dataSnowflakeExternalAccessIntegrations` Submodule" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSnowflakeExternalAccessIntegrations <a name="DataSnowflakeExternalAccessIntegrations" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/external_access_integrations snowflake_external_access_integrations}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_external_access_integrations.DataSnowflakeExternalAccessIntegrations;

DataSnowflakeExternalAccessIntegrations.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .id(java.lang.String)
//  .like(java.lang.String)
//  .withDescribe(java.lang.Boolean|IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/external_access_integrations#id DataSnowflakeExternalAccessIntegrations#id}. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.Initializer.parameter.like">like</a></code> | <code>java.lang.String</code> | Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`). |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.Initializer.parameter.withDescribe">withDescribe</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | (Default: `true`) Runs DESC EXTERNAL ACCESS INTEGRATION for each integration returned by SHOW EXTERNAL ACCESS INTEGRATIONS. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/external_access_integrations#id DataSnowflakeExternalAccessIntegrations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `like`<sup>Optional</sup> <a name="like" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.Initializer.parameter.like"></a>

- *Type:* java.lang.String

Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/external_access_integrations#like DataSnowflakeExternalAccessIntegrations#like}

---

##### `withDescribe`<sup>Optional</sup> <a name="withDescribe" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.Initializer.parameter.withDescribe"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

(Default: `true`) Runs DESC EXTERNAL ACCESS INTEGRATION for each integration returned by SHOW EXTERNAL ACCESS INTEGRATIONS.

The output of describe is saved to the describe_output field. By default this value is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/external_access_integrations#with_describe DataSnowflakeExternalAccessIntegrations#with_describe}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.resetLike">resetLike</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.resetWithDescribe">resetWithDescribe</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.resetId"></a>

```java
public void resetId()
```

##### `resetLike` <a name="resetLike" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.resetLike"></a>

```java
public void resetLike()
```

##### `resetWithDescribe` <a name="resetWithDescribe" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.resetWithDescribe"></a>

```java
public void resetWithDescribe()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataSnowflakeExternalAccessIntegrations resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.isConstruct"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_external_access_integrations.DataSnowflakeExternalAccessIntegrations;

DataSnowflakeExternalAccessIntegrations.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.isTerraformElement"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_external_access_integrations.DataSnowflakeExternalAccessIntegrations;

DataSnowflakeExternalAccessIntegrations.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.isTerraformDataSource"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_external_access_integrations.DataSnowflakeExternalAccessIntegrations;

DataSnowflakeExternalAccessIntegrations.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.generateConfigForImport"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_external_access_integrations.DataSnowflakeExternalAccessIntegrations;

DataSnowflakeExternalAccessIntegrations.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataSnowflakeExternalAccessIntegrations.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataSnowflakeExternalAccessIntegrations resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataSnowflakeExternalAccessIntegrations to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataSnowflakeExternalAccessIntegrations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/external_access_integrations#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataSnowflakeExternalAccessIntegrations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.externalAccessIntegrations">externalAccessIntegrations</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList">DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.likeInput">likeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.withDescribeInput">withDescribeInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.like">like</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.withDescribe">withDescribe</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `externalAccessIntegrations`<sup>Required</sup> <a name="externalAccessIntegrations" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.externalAccessIntegrations"></a>

```java
public DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList getExternalAccessIntegrations();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList">DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `likeInput`<sup>Optional</sup> <a name="likeInput" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.likeInput"></a>

```java
public java.lang.String getLikeInput();
```

- *Type:* java.lang.String

---

##### `withDescribeInput`<sup>Optional</sup> <a name="withDescribeInput" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.withDescribeInput"></a>

```java
public java.lang.Boolean|IResolvable getWithDescribeInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `like`<sup>Required</sup> <a name="like" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.like"></a>

```java
public java.lang.String getLike();
```

- *Type:* java.lang.String

---

##### `withDescribe`<sup>Required</sup> <a name="withDescribe" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.withDescribe"></a>

```java
public java.lang.Boolean|IResolvable getWithDescribe();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataSnowflakeExternalAccessIntegrationsConfig <a name="DataSnowflakeExternalAccessIntegrationsConfig" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsConfig.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_external_access_integrations.DataSnowflakeExternalAccessIntegrationsConfig;

DataSnowflakeExternalAccessIntegrationsConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .id(java.lang.String)
//  .like(java.lang.String)
//  .withDescribe(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/external_access_integrations#id DataSnowflakeExternalAccessIntegrations#id}. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsConfig.property.like">like</a></code> | <code>java.lang.String</code> | Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`). |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsConfig.property.withDescribe">withDescribe</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | (Default: `true`) Runs DESC EXTERNAL ACCESS INTEGRATION for each integration returned by SHOW EXTERNAL ACCESS INTEGRATIONS. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/external_access_integrations#id DataSnowflakeExternalAccessIntegrations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `like`<sup>Optional</sup> <a name="like" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsConfig.property.like"></a>

```java
public java.lang.String getLike();
```

- *Type:* java.lang.String

Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/external_access_integrations#like DataSnowflakeExternalAccessIntegrations#like}

---

##### `withDescribe`<sup>Optional</sup> <a name="withDescribe" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsConfig.property.withDescribe"></a>

```java
public java.lang.Boolean|IResolvable getWithDescribe();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

(Default: `true`) Runs DESC EXTERNAL ACCESS INTEGRATION for each integration returned by SHOW EXTERNAL ACCESS INTEGRATIONS.

The output of describe is saved to the describe_output field. By default this value is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/external_access_integrations#with_describe DataSnowflakeExternalAccessIntegrations#with_describe}

---

### DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrations <a name="DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrations" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrations.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_external_access_integrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrations;

DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrations.builder()
    .build();
```


### DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutput <a name="DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutput" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutput.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_external_access_integrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutput;

DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutput.builder()
    .build();
```


### DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutput <a name="DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutput" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutput.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_external_access_integrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutput;

DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutput.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList <a name="DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_external_access_integrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList;

new DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList.get"></a>

```java
public DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference <a name="DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_external_access_integrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference;

new DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.property.allowedApiAuthenticationIntegrations">allowedApiAuthenticationIntegrations</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.property.allowedAuthenticationSecrets">allowedAuthenticationSecrets</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.property.allowedNetworkRules">allowedNetworkRules</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.property.enabled">enabled</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutput">DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowedApiAuthenticationIntegrations`<sup>Required</sup> <a name="allowedApiAuthenticationIntegrations" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.property.allowedApiAuthenticationIntegrations"></a>

```java
public java.util.List<java.lang.String> getAllowedApiAuthenticationIntegrations();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedAuthenticationSecrets`<sup>Required</sup> <a name="allowedAuthenticationSecrets" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.property.allowedAuthenticationSecrets"></a>

```java
public java.util.List<java.lang.String> getAllowedAuthenticationSecrets();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedNetworkRules`<sup>Required</sup> <a name="allowedNetworkRules" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.property.allowedNetworkRules"></a>

```java
public java.util.List<java.lang.String> getAllowedNetworkRules();
```

- *Type:* java.util.List<java.lang.String>

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.property.enabled"></a>

```java
public IResolvable getEnabled();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.property.internalValue"></a>

```java
public DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutput getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutput">DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutput</a>

---


### DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList <a name="DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_external_access_integrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList;

new DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList.get"></a>

```java
public DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference <a name="DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_external_access_integrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference;

new DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.property.describeOutput">describeOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList">DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.property.showOutput">showOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList">DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrations">DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `describeOutput`<sup>Required</sup> <a name="describeOutput" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.property.describeOutput"></a>

```java
public DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList getDescribeOutput();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList">DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList</a>

---

##### `showOutput`<sup>Required</sup> <a name="showOutput" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.property.showOutput"></a>

```java
public DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList getShowOutput();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList">DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.property.internalValue"></a>

```java
public DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrations getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrations">DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrations</a>

---


### DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList <a name="DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_external_access_integrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList;

new DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList.get"></a>

```java
public DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference <a name="DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_external_access_integrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference;

new DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.property.category">category</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.property.createdOn">createdOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.property.enabled">enabled</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutput">DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.property.category"></a>

```java
public java.lang.String getCategory();
```

- *Type:* java.lang.String

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.property.createdOn"></a>

```java
public java.lang.String getCreatedOn();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.property.enabled"></a>

```java
public IResolvable getEnabled();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.property.internalValue"></a>

```java
public DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutput getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutput">DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutput</a>

---



